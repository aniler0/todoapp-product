import { SVGProps } from "react";

const Unchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        x={2}
        y={1.5}
        width={25}
        height={25}
        rx={4.5}
        fill="#FFF0EE"
        stroke="#33322E"
        strokeWidth={3}
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.5}
        y={0}
        width={30}
        height={30}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={2} />
        <feColorMatrix values="0 0 0 0 0.2 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_225_59" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_225_59"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Unchecked;
