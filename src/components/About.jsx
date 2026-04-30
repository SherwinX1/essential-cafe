// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="mt-28 w-full max-w-6xl mx-auto bg-white border border-[#e8ded2] rounded-[2rem] p-8 shadow-xl shadow-[#3c2415]/5">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#8b5e3c] mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2f1d12] mb-5">
            A modern cafe designed for people who love great coffee and relaxed style.
          </h2>
          <p className="text-base leading-8 text-[#5f4b3b] mb-6">
            Essential Hub is a calm space where every detail is curated for a premium coffee experience. From ethically sourced beans to thoughtful service,
            our goal is to make every visit feel elevated and effortless.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#efe4d7] bg-[#fff6ec] p-5 delay-100">
              <p className="font-semibold text-[#3c2415] mb-2">Fine Ingredients</p>
              <p className="text-sm text-[#6b5544]">Only the best beans and house-made offerings.</p>
            </div>
            <div className="rounded-3xl border border-[#efe4d7] bg-[#fff6ec] p-5 delay-200">
              <p className="font-semibold text-[#3c2415] mb-2">Relaxed Vibe</p>
              <p className="text-sm text-[#6b5544]">A welcoming setting for work, meetings, or downtime.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#f8efe4] p-8 shadow-inner shadow-[#3c2415]/10 delay-300">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8b5e3c] mb-4">Our Values</p>
          <ul className="space-y-4 text-[#5f4b3b]">
            <li className="rounded-3xl bg-white border border-[#e9d9cc] p-4">
              <strong className="block text-[#3c2415] mb-1">Sustainability</strong>
              Thoughtful sourcing that supports growers and the planet.
            </li>
            <li className="rounded-3xl bg-white border border-[#e9d9cc] p-4">
              <strong className="block text-[#3c2415] mb-1">Quality</strong>
              Crafted drinks with consistent, memorable flavor.
            </li>
            <li className="rounded-3xl bg-white border border-[#e9d9cc] p-4">
              <strong className="block text-[#3c2415] mb-1">Community</strong>
              A warm and welcoming space for every guest.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
