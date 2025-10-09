export default function BottomFadeOverlay({
  baseWidth = 375,
  baseHeight = 118,
  from = "rgba(243, 242, 239, 0)",
  to = "#F3F2EF",
  className = "",
}) {
  return (
    <div
      className={`absolute bottom-0 left-0 z-[60] pointer-events-none select-none w-full ${className}`}
      style={{
        aspectRatio: `${baseWidth} / ${baseHeight}`,
        background: `linear-gradient(180deg, ${from} 25.16%, ${to} 100%)`,
      }}
    />
  );
}
