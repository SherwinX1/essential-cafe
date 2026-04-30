// src/components/Homepage.jsx
export default function Homepage() {
  return (
    <main id="home" className="pt-40 px-6 flex flex-col items-center text-center min-h-[calc(100vh-6rem)]">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.4em] text-[#7f5d45] mb-4">
          Welcome to Essential Hub
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#2f1d12] leading-tight mb-6">
          Discover the perfect blend of 
          <span className="text-[#8b5e3c]"> coffee, comfort,</span> and quiet luxury.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#4f3a2b] leading-relaxed mb-10">
          Experience the finest beans sourced ethically, brewed with craftsmanship, and served in a calm, elevated atmosphere.
          Essential Hub brings a modern cafe destination to every cup.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
            href="https://www.facebook.com/messages/t/103136719210870" 
            className="inline-block px-8 py-3 text-base font-semibold bg-[#4d2f19] text-white rounded-full shadow-lg shadow-[#4d2f19]/20 transition hover:bg-[#362012] text-center"
        >
            Reserve a Table
        </a>
        <a 
            href="https://www.facebook.com/messages/t/103136719210870" 
            className="inline-block px-8 py-3 text-base font-semibold bg-white text-[#4d2f19] rounded-full border border-[#d1b7a5] shadow-sm transition hover:bg-[#f3e7dd] text-center"
        >
            View Menu
        </a>
        </div>

      </div>

      <section className="mt-16 mb-16 grid gap-6 sm:grid-cols-3 w-full max-w-5xl">
        <div className="rounded-3xl bg-white/90 border border-[#e5d7cb] p-6 shadow-sm text-left">
          <h2 className="text-xl font-semibold text-[#3c2415] mb-2">Premium Beans</h2>
          <p className="text-sm text-[#6b5647]">
            Freshly roasted blends designed to bring out rich, balanced flavors in every cup.
          </p>
        </div>
        <div className="rounded-3xl bg-white/90 border border-[#e5d7cb] p-6 shadow-sm text-left">
          <h2 className="text-xl font-semibold text-[#3c2415] mb-2">Cozy Atmosphere</h2>
          <p className="text-sm text-[#6b5647]">
            Relax in a warm, inviting space crafted for meaningful conversations and quiet moments.
          </p>
        </div>
        <div className="rounded-3xl bg-white/90 border border-[#e5d7cb] p-6 shadow-sm text-left">
          <h2 className="text-xl font-semibold text-[#3c2415] mb-2">Expert Brewing</h2>
          <p className="text-sm text-[#6b5647]">
            Each pour is prepared by experienced baristas using precise techniques.
          </p>
        </div>
      </section>
    </main>
  );
}
