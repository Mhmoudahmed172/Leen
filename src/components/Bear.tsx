import Bouquet from "./Bouquet";

type BearProps = {
  onBearClick: () => void;
  onBouquetClick: () => void;
};

export default function Bear({ onBearClick, onBouquetClick }: BearProps) {
  return (
    <svg
      className="bear-svg h-full w-full overflow-visible"
      viewBox="0 0 320 400"
      role="img"
      aria-label="دب كرتوني يحمل باقة ورد"
      onClick={onBearClick}
    >
      <defs>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#110a1e" floodOpacity=".34" />
        </filter>
      </defs>

      <g className="bear-character cursor-pointer" filter="url(#softShadow)">
        <g className="bouquet-back-position" transform="translate(160 248) rotate(2)">
          <g className="bouquet-back" transform="scale(.72)">
            <Bouquet />
          </g>
        </g>

        <g className="arm-left-back bear-arm" transform="translate(103 217)">
          <g className="arm-left-pose">
            <path d="M2 0 C-19 23 -23 70 -6 94 C10 88 18 76 14 60 C10 42 13 22 25 7 C19 0 10 -3 2 0Z" fill="#b9784b" />
            <circle cx="-5" cy="89" r="18" fill="#c98954" />
          </g>
        </g>

        <g className="arm-right-back bear-arm" transform="translate(217 217)">
          <g className="arm-right-pose">
            <path d="M-2 0 C19 23 23 70 6 94 C-10 88 -18 76 -14 60 C-10 42 -13 22 -25 7 C-19 0 -10 -3 -2 0Z" fill="#b9784b" />
            <circle cx="5" cy="89" r="18" fill="#c98954" />
          </g>
        </g>

        <g className="bear-body">
          <ellipse cx="160" cy="258" rx="74" ry="86" fill="#c98954" />
          <ellipse cx="160" cy="274" rx="46" ry="57" fill="#f2d5af" opacity=".96" />
          <path d="M103 318 C122 360 198 360 217 318 C199 338 121 338 103 318Z" fill="#a96b42" opacity=".25" />
        </g>

        <g className="arm-left-front bear-arm" transform="translate(103 217)">
          <g className="arm-left-pose">
            <path d="M2 0 C-10 21 -7 58 17 83 C31 76 35 61 25 47 C17 34 17 17 25 7 C19 0 10 -3 2 0Z" fill="#b9784b" />
            <circle cx="20" cy="78" r="18" fill="#c98954" />
          </g>
        </g>

        <g className="arm-right-front bear-arm" transform="translate(217 217)">
          <g className="arm-right-pose">
            <path d="M-2 0 C10 21 7 58 -17 83 C-31 76 -35 61 -25 47 C-17 34 -17 17 -25 7 C-19 0 -10 -3 -2 0Z" fill="#b9784b" />
            <circle cx="-20" cy="78" r="18" fill="#c98954" />
          </g>
        </g>

        <g className="bear-head" transform="translate(0 0)">
          <g className="ear-left bear-ear">
            <circle cx="97" cy="98" r="36" fill="#b9784b" />
            <circle cx="97" cy="98" r="21" fill="#e9bd91" />
          </g>
          <g className="ear-right bear-ear">
            <circle cx="223" cy="98" r="36" fill="#b9784b" />
            <circle cx="223" cy="98" r="21" fill="#e9bd91" />
          </g>
          <ellipse cx="160" cy="140" rx="87" ry="80" fill="#c98954" />
          <ellipse cx="160" cy="159" rx="45" ry="36" fill="#f4dab7" />
          <ellipse className="cheek-left" cx="101" cy="163" rx="17" ry="11" fill="#f3a0a9" opacity=".74" />
          <ellipse className="cheek-right" cx="219" cy="163" rx="17" ry="11" fill="#f3a0a9" opacity=".74" />
          <g className="eye-left bear-eye" transform="translate(130 137)">
            <ellipse cx="0" cy="0" rx="8" ry="10" fill="#2f1f1c" />
            <circle cx="-3" cy="-4" r="2.2" fill="#fff7f0" />
          </g>
          <g className="eye-right bear-eye" transform="translate(190 137)">
            <ellipse cx="0" cy="0" rx="8" ry="10" fill="#2f1f1c" />
            <circle cx="-3" cy="-4" r="2.2" fill="#fff7f0" />
          </g>
          <path d="M151 151 C151 144 169 144 169 151 C169 158 151 158 151 151Z" fill="#5a3528" />
          <path d="M160 157 C158 166 148 169 141 164" fill="none" stroke="#5a3528" strokeWidth="4" strokeLinecap="round" />
          <path d="M160 157 C162 166 172 169 179 164" fill="none" stroke="#5a3528" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g className="leg-left" transform="translate(120 335)">
          <ellipse cx="0" cy="0" rx="29" ry="19" fill="#a96b42" />
          <ellipse cx="0" cy="-2" rx="17" ry="9" fill="#e9bd91" opacity=".82" />
        </g>
        <g className="leg-right" transform="translate(200 335)">
          <ellipse cx="0" cy="0" rx="29" ry="19" fill="#a96b42" />
          <ellipse cx="0" cy="-2" rx="17" ry="9" fill="#e9bd91" opacity=".82" />
        </g>

        <g
          className="bouquet-front-position"
          transform="translate(160 283)"
          onClick={(event) => {
            event.stopPropagation();
            onBouquetClick();
          }}
        >
          <g className="bouquet-front" transform="scale(.82)">
            <Bouquet />
          </g>
        </g>
      </g>
    </svg>
  );
}
