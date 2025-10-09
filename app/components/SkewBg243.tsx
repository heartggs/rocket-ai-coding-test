export default function SkewBg243({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      // 필터 여유 포함한 viewBox (사다리꼴이 네모로 잘려 보이지 않게)
      viewBox="-17 0.5 418 313"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
    >
      <g filter="url(#f243)">
        <path
          d="M411 323.5L288 292L-7 304V118.831L190.5 41.5L397.5 10.5L411 323.5Z"
          fill="url(#g243)"
        />
      </g>
      <defs>
        <filter
          id="f243"
          x="-17"
          y="0.5"
          width="418"
          height="313"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_1_677"
          />
        </filter>
        <linearGradient
          id="g243"
          x1="196.5"
          y1="304"
          x2="196.5"
          y2="-23.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D1C3AB" />
          <stop offset="1" stopColor="#B19C83" />
        </linearGradient>
      </defs>
    </svg>
  );
}
