import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-6'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
