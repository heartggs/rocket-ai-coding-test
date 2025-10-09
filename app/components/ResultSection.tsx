import Image from "next/image";
import SpeechBubble2 from "./SpeechBubble2";
import GapyeongWaveText from "./GapyeongWaveText";
import Mansaeryeok from "./Mansaeryeok";
import BottomFadeOverlay from "./BottomFadeOverlay";

export default function ResultSection() {
  return (
    <div className="relative h-[945px]">
      <div
        className="absolute"
        style={{
          top: "-102px",
          left: "24px",
          width: 239,
          height: 138,
          overflow: "visible",
          pointerEvents: "none",
          zIndex: "60",
        }}
      >
        <SpeechBubble2 />
        <GapyeongWaveText
          size={16}
          align="center"
          className="
                    z-60 w-[171px]
                    font-hanseokbong font-normal leading-[150%] tracking-[-0.025em]
                    whitespace-normal break-keep
                  "
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          제가 oo님의 사주를 보기 쉽게 표로 정리했어요
        </GapyeongWaveText>
      </div>

      <div className="relative w-full h-auto">
        <div className="relative w-full aspect-[375/306]">
          <Image src="/result.png" alt="결과" fill className="object-contain" />
        </div>
        <BottomFadeOverlay baseHeight={118} baseWidth={375} />
      </div>

      <Mansaeryeok />
    </div>
  );
}
