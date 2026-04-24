import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/917588945789"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg will-change-transform hover:scale-105 active:scale-[0.97] transition-transform duration-200 ease-out-quart"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
