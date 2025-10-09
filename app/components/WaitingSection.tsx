import Image from "next/image";
import GapyeongWaveText from "./GapyeongWaveText";
import SpeechBubble1 from "./SpeechBubble1";

export default function WaitingSection() {
  return (
    <div className="relative h-[405px]">
      <div
        className="absolute"
        style={{
          top: "-40px",
          left: "24px",
          width: 215, // 래퍼 크기를 말풍선 크기와 동일하게
          height: 139,
          overflow: "visible", // 혹시 필터 번짐이 커져도 안전
          pointerEvents: "none", // 말풍선이 클릭을 가리지 않게 (필요 시)
          zIndex: "60",
        }}
      >
        <SpeechBubble1 />
        {/* 텍스트 오버레이: 래퍼(215x116) 기준으로 배치 */}
        <GapyeongWaveText
          size={16}
          align="center"
          leading="150%"
          tracking="-0.025em"
          className="
            z-60 w-[134px]
            font-hanseokbong whitespace-normal break-keep"
          style={{
            position: "absolute",
            top: "56%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요.
        </GapyeongWaveText>
      </div>

      <div className="absolute inset-x-0 top-[96px] pr-6">
        <div className="flex justify-between">
          {/* Left: 웨이브 */}
          <div className="relative w-[120px] h-[280px] pt-[90px]">
            <Image
              src="/wave.png"
              alt="효과"
              width={120}
              height={280}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right: 브러시 + 슥슥(오버레이) */}
          <div className="relative w-[120px] h-[280px]">
            <Image
              src="/waiting.png"
              alt="로딩중"
              width={120}
              height={280}
              className="w-full h-full object-contain"
            />
            <p
              className="
    font-ownglyph
    font-normal
    text-[50px]
    leading-[100%]
    tracking-[0]
    text-center
    text-black
    absolute z-10
    left-[-40px] top-[18px]
    rotate-[6deg]             
    m-0 inline-block
  "
              style={{
                fontFamily: "var(--font-ownglyph), sans-serif",
                fontWeight: 400,
                WebkitTextStroke: "1px #ffffff",
                textShadow: "0px 0px 0px rgba(0,0,0,0)",
              }}
            >
              슥슥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
