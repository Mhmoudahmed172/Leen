const stars = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 9) % 100}%`,
  top: `${8 + ((index * 19) % 54)}%`,
  size: 1 + (index % 3) * 0.7,
  delay: `${(index % 9) * 0.33}s`,
}));

export default function Background() {
  return (
    <>
      <div className="night-sky absolute inset-0 opacity-0" />
      <div className="star-field absolute inset-0 overflow-hidden" aria-hidden="true">
        {stars.map((star) => (
          <span
            className="star absolute rounded-full opacity-0"
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
      <div className="pink-aura absolute left-1/2 top-[47%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0" />
      <div className="grass absolute inset-x-0 bottom-0" />
      <svg className="grass-blades absolute inset-x-0 bottom-0 h-[25dvh] w-full" viewBox="0 0 420 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 72 C54 55 82 82 133 66 C187 50 228 79 283 62 C337 45 376 70 420 56 L420 120 L0 120Z" fill="#203f37" />
        <path d="M0 88 C58 69 94 96 145 78 C203 58 244 88 297 72 C348 55 382 82 420 69 L420 120 L0 120Z" fill="#285345" opacity=".92" />
        <g stroke="#386f55" strokeWidth="3" strokeLinecap="round" opacity=".78">
          <path d="M28 103 C23 84 27 70 36 56" />
          <path d="M76 105 C72 88 79 70 91 57" />
          <path d="M138 107 C133 86 140 73 154 59" />
          <path d="M215 106 C210 88 214 73 226 58" />
          <path d="M279 108 C274 88 280 71 292 57" />
          <path d="M354 106 C349 88 354 73 368 59" />
        </g>
      </svg>
    </>
  );
}
