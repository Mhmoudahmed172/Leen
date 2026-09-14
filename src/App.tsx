import { useRef } from "react";
import Background from "./components/Background";
import Bear from "./components/Bear";
import FloatingHearts from "./components/FloatingHearts";
import { useLoveStoryAnimation } from "./hooks/useLoveStoryAnimation";

export default function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { isComplete, waveBear, burstHearts } = useLoveStoryAnimation(rootRef);

  return (
    <main
      ref={rootRef}
      className="love-stage relative min-h-[100dvh] w-screen overflow-hidden text-white"
      dir="rtl"
    >
      <div className="phone-stage relative mx-auto min-h-[100dvh] w-full max-w-[430px] overflow-hidden">
        <Background />
        <FloatingHearts />

        <div className="story-scene absolute inset-x-0 mx-auto flex items-end justify-center">
          <div className="bear-frame relative aspect-[320/400]">
            <Bear onBearClick={waveBear} onBouquetClick={isComplete ? burstHearts : () => undefined} />
          </div>
        </div>

        <button
          className={`love-word absolute left-1/2 -translate-x-1/2 translate-y-0 whitespace-nowrap border-0 bg-transparent p-0 text-center font-bold leading-[1.16] text-[#ffd5e2] opacity-0 outline-none ${
            isComplete ? "cursor-pointer" : "pointer-events-none"
          }`}
          aria-label="بحبك يا وتيني، يا ليونتي"
          type="button"
          onClick={isComplete ? burstHearts : undefined}
        >
          <span>بحبك يا وتيني</span>
          <span>يا ليونتي</span>
          <svg className="message-heart" viewBox="0 0 32 30" aria-hidden="true">
            <path d="M16 28 C10 22 3 18 3 10 C3 5 6 2 10 2 C13 2 15 4 16 7 C17 4 20 2 23 2 C27 2 30 5 30 10 C30 18 22 23 16 28Z" />
          </svg>
        </button>
      </div>
    </main>
  );
}
