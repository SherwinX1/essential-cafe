export default function MapSection() {
  return (
    <section id="location" className="mt-20 w-full px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl p-6">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8b5e3c] mb-2">Location</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2f1d12]">
            Find us at Essential Hub Cafe
          </h2>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-[#e9d6c8] shadow-sm">
          <a
            href="https://www.google.com/maps/search/?api=1&query=14.6394928,121.1215051"
            target="_blank"
            rel="noreferrer"
            className="block h-full w-full"
          >
            <iframe
              title="Essential Hub Cafe Location"
              src="https://www.google.com/maps?q=14.6394928,121.1215051&z=17&output=embed"
              width="100%"
              height="450"
              className="border-0 pointer-events-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
