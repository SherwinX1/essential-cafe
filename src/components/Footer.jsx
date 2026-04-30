// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e8ded2] bg-white/90 py-8 text-center text-sm text-[#6b5544]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="mb-2 text-[#3c2415] font-semibold">Essential Hub Cafe</p>
        <p className="leading-relaxed">
          Crafted coffee, calm atmosphere, and everyday essentials for your best moments.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/EssentialHubCafe"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4d2f19]/10 text-[#4d2f19] transition hover:bg-[#4d2f19]/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/essentialhubcafe/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4d2f19]/10 text-[#4d2f19] transition hover:bg-[#4d2f19]/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.7 2.05a.75.75 0 0 1 .75.75v1.2a.75.75 0 0 1-1.5 0v-1.2a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@yourboyjl"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4d2f19]/10 text-[#4d2f19] transition hover:bg-[#4d2f19]/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M15.5 4.5c0 2.5 1.5 4.5 4.5 5V9.9a6.8 6.8 0 0 1-2.6-.5v5.8c0 2.3-1.4 3.5-3.7 3.5-2.4 0-4.1-1.8-4.1-4.5 0-2.8 1.8-4.6 4.5-4.6.4 0 .8 0 1.2.1v2.3c-.3 0-.7 0-1 .1-1.1 0-1.7.7-1.7 1.8 0 1.1.6 1.8 1.7 1.8 1 0 1.4-.6 1.4-1.4V5.5h2.3Z" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-xs text-[#8b5e3c]">
          © 2025 Essential Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
