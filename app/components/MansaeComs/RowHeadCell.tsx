type Props = {
  label: string;
  subLabel?: string;
};

export default function RowHeadCell({ label, subLabel }: Props) {
  return (
    <th
      scope="row"
      className="mansae-bold-line mansae-border-r mansae-border-b px-[4.5px]"
    >
      <div className="flex flex-col items-center">
        <span className="font-zen text-xs">{label}</span>
        {subLabel && (
          <span className="font-gyeonggi font-bold text-[7.8px]">
            {subLabel}
          </span>
        )}
      </div>
    </th>
  );
}
