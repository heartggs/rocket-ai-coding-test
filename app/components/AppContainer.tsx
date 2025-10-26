"use client";
import type { CSSProperties } from "react";

type ScaleContainerStyle = CSSProperties & { "--s": string };

export function AppContainer({ children }: { children: React.ReactNode }) {
  const style: ScaleContainerStyle = { "--s": "calc(100% / 375)" };

  return (
    <div className="mx-auto w-full max-w- bg-[#f3f2ef]" style={style}>
      {children}
    </div>
  );
}
