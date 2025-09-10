import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth, db } from "@/lib/firebase";
import type { AppRole } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import type { User as FirebaseUser } from "firebase/auth";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";

interface AuthUser {
  uid: string;
  email: string | null;
  name?: string | null;
  role: AppRole;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

async function fetchUserData(uid: string): Promise<{ role: AppRole; name?: string; email?: string }> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const data = snap.data() as { role?: AppRole; name?: string; email?: string };
    return {
      role: (data.role as AppRole) || "alumno",
      name: data.name,
      email: data.email
    };
  }
  
  // Verificar si es el primer usuario (temporal para crear admin)
  const usersSnap = await getDocs(collection(db, "users"));
  const isFirstUser = usersSnap.empty;
  
  const defaultRole: AppRole = isFirstUser ? "admin" : "alumno";
  
  // Crear perfil de usuario
  await setDoc(ref, { role: defaultRole }, { merge: true });
  return { role: defaultRole };
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
      if (!fbUser) {
        setUser(null);
        setLoading(false);
        return;
      }
      try {
        const userData = await fetchUserData(fbUser.uid);
        setUser({ 
          uid: fbUser.uid, 
          email: userData.email || fbUser.email, 
          name: userData.name || fbUser.displayName, 
          role: userData.role 
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  const logout = async () => {
    const { signOut } = await import("firebase/auth");
    await signOut(auth);
  };

  const value = useMemo(() => ({ user, loading, logout }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};


