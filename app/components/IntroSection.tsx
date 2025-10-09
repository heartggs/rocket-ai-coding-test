import Image from "next/image";
import BatangText from "./BatangText";
import SkewBg243 from "./SkewBg243";
import BottomFadeOverlay from "./BottomFadeOverlay";

const SET = ["甲乙丙丁戊己", "庚辛壬癸子丑", "寅卯辰巳午未", "申酉戌亥甲乙"];
const LINES = [...SET, ...SET];

export default function IntroSection() {
  return (
    <div className="relative h-[667px] bg-intro-gradient overflow-hidden">
      {/* 배경 텍스트 */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center opacity-20 pointer-events-none select-none">
        <div className="h-full flex flex-col justify-between items-center">
          {LINES.map((line, idx) => (
            <p
              key={idx}
              className="
          font-zen-soft
          text-[60px]
          whitespace-nowrap
          break-keep
          leading-[100%]
          tracking-[0.2em]
          text-white
          blur-xs
          text-center
          w-full
        "
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* 도형 그라디언트 */}
      <div
        className="absolute z-[5] pointer-events-none select-none"
        style={{
          width: "345.26px",
          height: "336.32px",
          left: "-24.61px",
          bottom: "3px",
          transform: "rotate(172deg)",
          background: "linear-gradient(180deg, #D1C3AB 3.17%, #B19C83 103.17%)",
          filter: "blur(5px)",
        }}
      />

      <SkewBg243
        className="
          absolute bottom-[36px] right-[-34px] z-[5] pointer-events-none
          w-[418px] h-[313px] -translate-x-[7%] opacity-95
        "
      />
      {/* 타이틀 */}
      <div className="relative z-10 flex flex-col items-center gap-3 h-[261px] intro-black-gradient pt-[84px] text-white text-center">
        <BatangText level={1} size={20} className="m-0">
          제 1장
        </BatangText>
        <Image src="/intro-divide.png" alt="구분선" width={157} height={20} />
        <BatangText as="p" size={20} className="m-0">
          나의 사주 팔자
        </BatangText>
      </div>
      {/* 캐릭터 사진 */}
      <Image
        src="/intro-character.png"
        alt="인트로 캐릭터"
        width={314}
        height={534}
        className="absolute"
        priority
        style={{
          zIndex: "50",
          top: "172px",
          right: "0px",
        }}
      />

      <BottomFadeOverlay baseHeight={195} baseWidth={375} />
    </div>
  );
}
