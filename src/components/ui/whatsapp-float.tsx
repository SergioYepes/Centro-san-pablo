import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-elegant p-4 transition-colors"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};




