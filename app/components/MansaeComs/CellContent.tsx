type Props = {
  label?: string;
  subLabel: string;
};

export default function CellContent({ label, subLabel }: Props) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-zen font-bold text-[13.5px] md:text-[14.67px]">
        {label}
      </span>
      <span className="font-gyeonggi font-bold text-[9.78px] mt-[-3px]">
        {subLabel}
      </span>
    </div>
  );
}
