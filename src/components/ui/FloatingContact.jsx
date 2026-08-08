import { Mail } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M12.03 2a9.97 9.97 0 0 0-9.97 9.97c0 1.62.39 3.2 1.13 4.62L2 22l5.6-1.12c1.4.74 2.97 1.12 4.56 1.12a9.97 9.97 0 0 0 9.97-9.97A9.97 9.97 0 0 0 12.03 2zm0 18.28c-1.4 0-2.8-.35-4.04-1.02l-.29-.16-3.32.66.68-3.23-.18-.28a8.3 8.3 0 0 1-1.27-4.42c0-4.61 3.75-8.36 8.36-8.36 4.61 0 8.36 3.75 8.36 8.36 0 4.61-3.75 8.36-8.36 8.36zm4.58-6.24c-.25-.13-1.47-.72-1.7-.8-.22-.08-.39-.12-.55.12-.17.25-.65.81-.8 1-.15.17-.29.2-.55.07a7.02 7.02 0 0 1-2.04-1.26 7.74 7.74 0 0 1-1.41-1.75c-.15-.26-.02-.4.11-.53.12-.11.25-.3.38-.45.13-.15.17-.25.25-.42.09-.17.04-.32-.02-.45s-.55-1.32-.76-1.81c-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.89.87-.89 2.12 0 1.25.9 2.46 1.03 2.63.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.17-.47-.3z" />
  </svg>
);

export default function FloatingContact() {
  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971509689671"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-hover-target"
      >
        <WhatsAppIcon />
      </a>

      {/* Mail Button */}
      <a
        href="mailto:info@leadevents.com"
        aria-label="Send us an email"
        className="w-14 h-14 bg-brand-red hover:bg-[#8e0000] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(198,40,40,0.4)] hover:shadow-[0_6px_20px_rgba(198,40,40,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-hover-target"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
}
