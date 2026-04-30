// src/components/Navbar.jsx
export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Merchandise', href: '#merchandise' },
    { name: 'Rewards', href: '#rewards' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="bg-white/95 rounded-3xl px-6 py-3 flex items-center justify-between backdrop-blur-sm">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
        {/* Logo Image Container */}
        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
        <img 
            src="/src/assets/logo.png" 
            alt="Essential Hub Logo" 
            className="w-full h-full object-contain" 
        />
        </div>

        {/* Text Brand */}
        <span className="font-bold text-[22px] tracking-tight text-[#3c2415]">
            Essential <span className="text-[#8b5e3c]">Hub</span>
        </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium text-[#4b2e18] hover:text-[#291708] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth / CTA */}
        <div className="flex items-center gap-3">
        <a 
            href="https://www.facebook.com/messages/t/103136719210870" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <button className="px-5 py-2 text-base font-medium bg-[#4d2f19] text-white rounded-xl hover:bg-[#362012] transition-all cursor-pointer">
            Order Now
            </button>
        </a>
        </div>

      </div>
    </nav>
  );
}