// BatangText.tsx
// NOTE:
// - 태그 결정 우선순위: as > level > div
// - as와 level을 동시에 넘기지 않는 것을 권장합니다. (넘기면 as가 우선)
// - 훅/이벤트가 없으면 "use client"는 불필요합니다. 다만 Client 컴포넌트에서 import한다면 붙이세요.
// "use client";
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

type BatangTextProps<E extends React.ElementType = "div"> = {
  /** 시맨틱 헤딩 레벨(h1~h6). as가 없을 때만 사용됩니다. */
  level?: Level;
  /** 태그/컴포넌트 오버라이드 (있으면 level보다 우선) */
  as?: E;
  children: React.ReactNode;
  size?: number | string; // 20 -> '20px'로 변환
  weight?: 400 | 700;
  align?: Align;
  className?: string;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "className" | "style">;

export default function BatangText<E extends React.ElementType = "div">({
  level,
  as,
  children,
  size = 20,
  weight = 400,
  align = "center",
  className = "",
  style,
  ...rest
}: BatangTextProps<E>) {
  // 우선순위: as > level > div
  const Tag = (as || (level ? tagByLevel[level] : "div")) as React.ElementType;

  const alignClass: Record<Align, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  const weightClass = weight === 700 ? "font-bold" : "font-normal";

  return (
    <Tag
      className={`leading-[1] tracking-[-0.005em] ${weightClass} ${alignClass[align]} ${className}`}
      style={{
        fontSize: typeof size === "number" ? `${size}px` : size,
        fontFamily: "var(--font-batang), Georgia, serif",
        fontStyle: "normal",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
