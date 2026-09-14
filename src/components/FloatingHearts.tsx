const burstShapes = [
  { x: "42%", y: "64%", s: 0.48, kind: "heart", tone: "#ff86a2" },
  { x: "47%", y: "62%", s: 0.6, kind: "heart", tone: "#ffb1c4" },
  { x: "52%", y: "63%", s: 0.42, kind: "petal", tone: "#ffd0dc" },
  { x: "57%", y: "64%", s: 0.58, kind: "heart", tone: "#e84f6f" },
  { x: "37%", y: "60%", s: 0.36, kind: "petal", tone: "#ffa6ba" },
  { x: "62%", y: "60%", s: 0.38, kind: "petal", tone: "#ffcad6" },
  { x: "32%", y: "57%", s: 0.46, kind: "heart", tone: "#ff9bb4" },
  { x: "68%", y: "57%", s: 0.46, kind: "heart", tone: "#f46f8c" },
  { x: "44%", y: "56%", s: 0.32, kind: "petal", tone: "#ffdce5" },
  { x: "56%", y: "56%", s: 0.34, kind: "petal", tone: "#ffb9c9" },
  { x: "27%", y: "62%", s: 0.34, kind: "heart", tone: "#ef5d78" },
  { x: "73%", y: "62%", s: 0.34, kind: "heart", tone: "#ff8fab" },
  { x: "39%", y: "67%", s: 0.3, kind: "petal", tone: "#f9b3c2" },
  { x: "61%", y: "67%", s: 0.3, kind: "petal", tone: "#ffdde7" },
  { x: "50%", y: "59%", s: 0.54, kind: "heart", tone: "#d9415f" },
  { x: "49%", y: "68%", s: 0.28, kind: "petal", tone: "#ffc0ce" },
  { x: "35%", y: "53%", s: 0.28, kind: "petal", tone: "#ffb7c6" },
  { x: "65%", y: "53%", s: 0.28, kind: "petal", tone: "#ffd5df" },
  { x: "46%", y: "66%", s: 0.25, kind: "petal", tone: "#ff9fb4" },
  { x: "54%", y: "66%", s: 0.25, kind: "petal", tone: "#ffe1e8" },
];

const ambientShapes = [
  { x: "39%", y: "58%", s: 0.28, tone: "#ff9db5" },
  { x: "55%", y: "56%", s: 0.24, tone: "#ffc5d2" },
  { x: "62%", y: "60%", s: 0.22, tone: "#f36a87" },
];

function HeartIcon() {
  return (
    <svg viewBox="0 0 32 30" className="h-full w-full" aria-hidden="true">
      <path
        d="M16 28 C10 22 3 18 3 10 C3 5 6 2 10 2 C13 2 15 4 16 7 C17 4 20 2 23 2 C27 2 30 5 30 10 C30 18 22 23 16 28Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PetalIcon() {
  return (
    <svg viewBox="0 0 26 32" className="h-full w-full" aria-hidden="true">
      <path d="M13 30 C3 20 4 8 13 2 C22 8 23 20 13 30Z" fill="currentColor" />
      <path d="M13 7 C10 14 11 21 13 27" stroke="#ffe1e8" strokeWidth="1.4" strokeLinecap="round" opacity=".45" />
    </svg>
  );
}

export default function FloatingHearts() {
  return (
    <div className="floating-layer pointer-events-none absolute inset-0" aria-hidden="true">
      {burstShapes.map((shape, index) => (
        <span
          key={`${shape.x}-${shape.y}-${index}`}
          className="float-shape absolute opacity-0"
          style={{
            left: shape.x,
            top: shape.y,
            color: shape.tone,
            width: `${30 * shape.s}px`,
            height: `${30 * shape.s}px`,
          }}
        >
          {shape.kind === "heart" ? <HeartIcon /> : <PetalIcon />}
        </span>
      ))}
      {ambientShapes.map((shape, index) => (
        <span
          key={`ambient-${shape.x}`}
          className="ambient-shape absolute opacity-0"
          style={{
            left: shape.x,
            top: shape.y,
            color: shape.tone,
            width: `${30 * shape.s}px`,
            height: `${30 * shape.s}px`,
            animationDelay: `${index * 1.3}s`,
          }}
        >
          <HeartIcon />
        </span>
      ))}
    </div>
  );
}
