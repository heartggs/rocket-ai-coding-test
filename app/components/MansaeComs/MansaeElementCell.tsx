type ElementType = "水" | "火" | "土" | "木" | "金" | "none";

type Props = {
  /** 한글 (임, 병 등) */
  korean: string;
  /** 한자 (壬, 丁 등) */
  chinese: string;
  /** 오행 (陽水, 陰火 등) */
  element: string;
};

const elementColors: Record<
  ElementType,
  { bg: string; text: string; border?: string }
> = {
  水: { bg: "rgba(47, 47, 47, 1)", text: "#fff" },
  火: { bg: "rgba(194, 48, 48, 1)", text: "#fff" },
  土: { bg: "rgba(233, 214, 168, 1)", text: "#fff" },
  木: { bg: "rgba(24, 134, 140, 1)", text: "#fff" },
  金: {
    bg: "rgba(249, 249, 249, 1)",
    text: "#000",
    border: "0.98px solid rgba(0, 0, 0, 1)",
  },
  none: { bg: "rgba(230, 230, 230, 0.5)", text: "rgba(0, 0, 0, 1)" },
};

export default function ElementCell({ korean, chinese, element }: Props) {
  const matched = (element.match(/[木火土金金水]/) ?? [])[0] as ElementType;
  const elementKey: ElementType = matched ? matched : "none";
  const { bg, text, border } = elementColors[elementKey];

  return (
    <div
      className="mx-auto my-auto w-[49px] h-[49px] md:w-[55.45px] md:h-[55.45px] box-border rounded-[12.55px] p-[2px] md:p-[4px]
                flex flex-col items-center justify-between"
      style={{ backgroundColor: bg, color: text, border: border }}
    >
      <span className="font-gyeonggi text-[7.6px]">{korean}</span>
      <span className="font-zen text-[19px] font-bold md:text-[25.11px] md:font-normal leading-none">
        {chinese}
      </span>
      <span className="font-zen-maru text-[8.37px]">{element}</span>
    </div>
  );
}
