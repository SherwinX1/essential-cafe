// src/components/Reviews.jsx
const reviews = [
  {
    name: 'Markly Andrew Betiola',
    title: 'Regular Customer',
    text: 'A great place to grab coffee in Marikina. I like the aesthetic interior and the coffee quality is surprisingly good for a small café. Will definitely come back!',
  },
  {
    name: 'Joemar Trabado Jr.',
    title: 'Regular Customer',
    text: 'A fantastic spot to get coffee in Marikina. I enjoy the style of the decor, and the coffee is surprisingly delicious for a little café. Will definitely come back.☕',
  },
  {
    name: 'Kate Whisly',
    title: 'Regular Customer',
    text: 'I’ve tried their iced coffee and frappes multiple times, and I can honestly rate them 10/10. Compared to other cafés I’ve tried around, this one offers very reasonable prices for its quality. Delicious drinks and great service.',
  },
  {
    name: 'Mark Joseph Cortez',
    title: 'Regular Customer',
    text: 'If you’re around Lilac Street, you should check this café upstairs. It’s a small hidden gem but the drinks are really good. The caramel latte was my favorite.',
  },
  {
    name: 'Noriel Lolong',
    title: 'Regular Customer',
    text: 'This place is honestly super nice, everything looks so aesthetic and the music is really chill, something you can actually vibe with. Their coffee is amazing, every sip is full of flavor. The whole atmosphere is just so cozy and comforting, perfect if you want to relax or just hang out for a while.🧋🧉🎶',
  },
    {
    name: 'Lenny Dela Cruz',
    title: 'Regular Customer',
    text: 'I didn’t expect to find such a cozy hidden café near Lilac Street. Essential Hub Café has a really nice and relaxing vibe. The Essential Latte was smooth and flavorful. Perfect spot for a quick coffee break in Marikina.',
  },
];

export default function Reviews() {
  return (
    <section className="mt-20 w-full overflow-hidden text-center">
      <div className="flex flex-col items-center justify-center mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-[#8b5e3c] mb-2">Customer Review</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f1d12]">
          What our customers say
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex gap-5 w-max animate-scroll-left">
          {reviews.concat(reviews).map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="min-w-[420px] max-w-[520px] flex-shrink-0 px-8 py-10 flex flex-col justify-between gap-6 text-center"
            >
              <p className="text-base leading-8 text-[#5f4b3b] whitespace-pre-line">“{review.text}”</p>
              <div>
                <p className="font-semibold text-[#3c2415]">{review.name}</p>
                <p className="text-sm text-[#6b5544] mt-1">{review.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
