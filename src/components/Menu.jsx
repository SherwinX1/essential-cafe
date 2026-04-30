// src/components/Menu.jsx
export default function Menu() {
  const menuItems = [
    { title: 'Espresso Classics', items: ['Cappuccino', 'Latte', 'Americano', 'Espresso'] },
    { title: 'Signature Drinks', items: ['Caramel Macchiato', 'Spanish Latte', 'White Mocha', 'Mocha', 'Cinnamon Oat'] },
    { title: 'Bakery Favorites', items: ['Chocolate Waffle', 'Caramel Waffle', 'Blueberry Waffle', 'Biscoff Waffle'] },
  ];

  const delayClasses = ['delay-100', 'delay-200', 'delay-300'];

  return (
    <section id="menu" className="mt-28 w-full max-w-6xl mx-auto bg-white border border-[#e8ded2] rounded-[2rem] p-8 shadow-xl shadow-[#3c2415]/5">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-[#8b5e3c] mb-2">Our Menu</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f1d12]">What’s brewing at Essential Hub</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {menuItems.map((group, index) => (
          <div key={group.title} className={`rounded-3xl border border-[#efe4d7] p-6 bg-[#fffaf5] ${delayClasses[index]}`}>
            <h3 className="text-xl font-semibold text-[#3c2415] mb-4">{group.title}</h3>
            <ul className="space-y-3 text-sm text-[#5f4b3b]">
              {group.items.map((item) => (
                <li key={item} className="flex items-center justify-between gap-4">
                  <span>{item}</span>
                  <span className="font-semibold text-[#3c2415]">$5.20</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
