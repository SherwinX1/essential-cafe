// src/components/Background.jsx
import backgroundImage from '../assets/background.jpg';

export default function Background({ children }) {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/30" />
      <div className="relative z-10">
        {children}
      </div>

      <a
        href="mailto:hello@essentialhub.com"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#4d2f19] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#4d2f19]/30 transition hover:bg-[#362012]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75zm1.5.75v9.75c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V7.5l-8.25 5.25L3.75 7.5zm7.5 4.875L19.5 7.5H4.5l7.5 5.625z" />
        </svg>
        Message Us
      </a>
    </div>
  );
}