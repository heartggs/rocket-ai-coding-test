import * as React from "react";

type Align = "left" | "center" | "right";
type Level = 1 | 2 | 3 | 4 | 5 | 6;

const tagByLevel: Record<Level, keyof React.JSX.IntrinsicElements> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

type GapyeongWaveTextProps<E extends React.ElementType = "div"> = {
  level?: Level;
  as?: E;
  children: React.ReactNode;

  /** font-size (ex: 20 또는 '20px' 또는 '1.25rem') */
  size?: number | string;

  /** 300 | 400 | 700 (Tailwind 클래스로 처리) */
  weight?: 300 | 400 | 700;

  align?: Align;

  /** line-height. 지정하지 않으면 아무 것도 적용 안 함 */
  leading?: number | string;

  /** letter-spacing. 지정하지 않으면 아무 것도 적용 안 함 */
  tracking?: number | string;

  className?: string;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "className" | "style">;

export default function GapyeongWaveText<E extends React.ElementType = "div">({
  level,
  as,
  children,
  size = 20,
  weight = 400,
  align = "center",
  leading, // ← 추가
  tracking, // ← 추가
  className = "",
  style,
  ...rest
}: GapyeongWaveTextProps<E>) {
  const Tag = (as || (level ? tagByLevel[level] : "div")) as React.ElementType;

  const alignClass: Record<Align, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const weightClass =
    weight === 700
      ? "font-bold"
      : weight === 300
      ? "font-light"
      : "font-normal";

  return (
    <Tag
      className={`${weightClass} ${alignClass[align]} ${className}`}
      style={{
        // 지정된 값만 적용 (미지정 시 아무 것도 넣지 않음)
        fontSize: typeof size === "number" ? `${size}px` : size,
        ...(leading !== undefined && {
          lineHeight: typeof leading === "number" ? `${leading}` : leading,
        }),
        ...(tracking !== undefined && {
          letterSpacing:
            typeof tracking === "number" ? `${tracking}px` : tracking,
        }),
        fontStyle: "normal",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
