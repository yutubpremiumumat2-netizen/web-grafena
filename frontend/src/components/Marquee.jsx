export const Marquee = ({ text }) => {
  const items = Array.from({ length: 4 });
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-5" data-testid="tagline-marquee">
      <div className="marquee-track gap-8">
        {items.map((_, i) => (
          <span
            key={i}
            className="font-heading whitespace-nowrap text-2xl font-medium text-white/70 sm:text-3xl"
          >
            {text}
            <span className="mx-8 text-[#f72585]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
