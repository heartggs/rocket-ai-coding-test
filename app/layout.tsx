import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = { title: "App", description: "…" };

const batang = localFont({
  src: [
    {
      path: "../public/fonts/BatangRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BatangBold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-batang", // CSS 변수만 주입
  display: "swap",
});

const hanseokbong = localFont({
  src: [
    {
      path: "../public/fonts/GapyeongHanseokbongL.woff",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/GapyeongHanseokbongR.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GapyeongHanseokbongB.woff",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-hanseokbong",
  display: "swap",
});

const ownglyph = localFont({
  src: [
    {
      path: "../public/fonts/Ownglyph-Coldywebtoonmaker.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ownglyph",
  display: "swap",
});

const gyeonggi = localFont({
  src: [
    {
      path: "../public/fonts/GyeonggiBatangRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GyeonggiBatangBold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gyeonggi",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* 핵심: 변수 주입 + font-sans 사용 */}
      <body
        className={`${batang.variable} ${hanseokbong.variable} ${ownglyph.variable} ${gyeonggi.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
