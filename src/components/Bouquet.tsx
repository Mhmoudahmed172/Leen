type BouquetProps = {
  className?: string;
};

function Rose({
  x,
  y,
  color,
  accent,
  scale = 1,
}: {
  x: number;
  y: number;
  color: string;
  accent: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 31 C-1 17 -1 6 0 -5" stroke="#426d47" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M-3 14 C-15 8 -15 -4 -4 -5 C0 2 0 8 -3 14Z" fill="#568a53" />
      <path d="M4 18 C17 12 17 0 6 -1 C3 5 2 11 4 18Z" fill="#477b49" />
      <g>
        <path d="M0 -18 C-14 -22 -19 -8 -10 -1 C-21 6 -10 20 0 13 C10 20 21 6 10 -1 C19 -8 14 -22 0 -18Z" fill={color} />
        <path d="M0 -17 C-8 -14 -10 -5 -1 -1 C8 -4 8 -13 0 -17Z" fill={accent} opacity=".86" />
        <path d="M-11 -1 C-3 -5 3 -2 3 6 C-4 10 -12 8 -15 3 C-16 1 -15 0 -11 -1Z" fill={accent} opacity=".74" />
        <path d="M11 -1 C3 -5 -3 -2 -3 6 C4 10 12 8 15 3 C16 1 15 0 11 -1Z" fill={accent} opacity=".74" />
        <path d="M-2 -8 C6 -11 12 -5 9 3 C3 2 -1 -1 -2 -8Z" fill="#ffb4c2" opacity=".55" />
        <circle cx="0" cy="1" r="5.2" fill="#ffd0dc" opacity=".5" />
      </g>
    </g>
  );
}

export default function Bouquet({ className = "" }: BouquetProps) {
  return (
    <g className={className}>
      <g className="bouquet-inner">
        <ellipse className="bouquet-glow" cx="0" cy="4" rx="58" ry="68" fill="#ff9cbc" opacity=".18" />
        <path d="M-52 18 C-32 -3 31 -3 52 18 L27 96 C15 111 -15 111 -27 96Z" fill="#f7d8ca" />
        <path d="M-52 18 C-28 45 -7 58 27 96 C11 110 -14 110 -27 96Z" fill="#efbfc0" opacity=".92" />
        <path d="M52 18 C31 45 7 58 -27 96 C-12 110 14 110 27 96Z" fill="#ffe4d9" opacity=".82" />
        <path d="M-35 53 C-13 65 13 65 35 53" fill="none" stroke="#ca6d75" strokeWidth="7" strokeLinecap="round" />
        <path d="M-14 67 C-35 61 -38 79 -17 81 C-7 81 -5 70 -14 67Z" fill="#d85d70" />
        <path d="M14 67 C35 61 38 79 17 81 C7 81 5 70 14 67Z" fill="#be4c61" />
        <path d="M-5 65 C-9 82 9 82 5 65Z" fill="#f39aa6" />
        <path d="M-9 58 C-2 55 5 55 11 58" fill="none" stroke="#ffd0dc" strokeWidth="2.5" strokeLinecap="round" opacity=".75" />

        <g transform="translate(0 9)">
          <g stroke="#426d47" strokeWidth="2.5" strokeLinecap="round" opacity=".8">
            <path d="M-38 20 C-29 -7 -24 -24 -18 -42" />
            <path d="M-25 24 C-19 -11 -9 -28 -4 -48" />
            <path d="M-10 26 C-9 -10 -7 -35 -2 -56" />
            <path d="M7 25 C4 -7 3 -35 1 -61" />
            <path d="M22 24 C18 -10 16 -27 23 -47" />
            <path d="M39 20 C32 -2 33 -25 39 -41" />
          </g>
          <path d="M-50 -4 C-66 -10 -66 -29 -47 -28 C-37 -22 -36 -9 -50 -4Z" fill="#5f9859" />
          <path d="M50 -5 C66 -13 64 -31 45 -28 C36 -21 36 -10 50 -5Z" fill="#4f8a50" />
          <path d="M-24 -10 C-42 -18 -42 -36 -23 -34 C-14 -28 -12 -16 -24 -10Z" fill="#6aa061" />
          <path d="M25 -12 C43 -21 42 -39 23 -35 C15 -28 13 -17 25 -12Z" fill="#6aa061" />
          <path d="M-2 -16 C-12 -32 -7 -47 8 -43 C13 -30 10 -20 -2 -16Z" fill="#7ab36a" />
          <path d="M-38 10 C-56 7 -60 -10 -42 -14 C-30 -9 -28 4 -38 10Z" fill="#477b49" />
          <path d="M38 10 C56 6 59 -12 41 -14 C30 -8 28 5 38 10Z" fill="#477b49" />

          <Rose x={-40} y={-38} scale={0.72} color="#d84658" accent="#f07a89" />
          <Rose x={-20} y={-51} scale={0.8} color="#ff8fa5" accent="#ffd0dc" />
          <Rose x={2} y={-58} scale={1.02} color="#ec6d85" accent="#ff9fb0" />
          <Rose x={25} y={-48} scale={0.82} color="#c9364e" accent="#ea6b7e" />
          <Rose x={43} y={-34} scale={0.7} color="#f06f88" accent="#ffadbc" />
          <Rose x={-32} y={-20} scale={0.78} color="#ff9db1" accent="#ffd4de" />
          <Rose x={-10} y={-25} scale={0.86} color="#d94d66" accent="#f48698" />
          <Rose x={14} y={-25} scale={0.86} color="#e95070" accent="#ff8ea2" />
          <Rose x={34} y={-15} scale={0.76} color="#bd3048" accent="#e76779" />
          <Rose x={-4} y={-8} scale={0.82} color="#ff7894" accent="#ffc0cd" />
        </g>
      </g>
    </g>
  );
}
