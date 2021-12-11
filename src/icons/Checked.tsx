import { SVGProps } from "react";

const Checked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <rect x={0.5} width={28} height={28} rx={6} fill="#F6A89E" />
      <rect
        x={2}
        y={1.5}
        width={25}
        height={25}
        rx={4.5}
        stroke="#33322E"
        strokeWidth={3}
      />
    </g>
    <path
      d="M6.863 12.675a1.5 1.5 0 1 0-.726 2.91l.726-2.91ZM12.66 19l-1.379.592a1.5 1.5 0 0 0 2.822-.183L12.659 19ZM26.826 6.464a1.5 1.5 0 1 0-.652-2.928l.652 2.928Zm-20.69 9.122c.392.097 1.487.565 2.642 1.357 1.162.796 2.111 1.737 2.502 2.649l2.757-1.184c-.726-1.69-2.235-3.03-3.563-3.94-1.335-.915-2.76-1.58-3.61-1.793l-.727 2.91Zm7.966 3.823c.534-1.885 1.893-4.75 4.07-7.345 2.172-2.587 5.07-4.802 8.654-5.6l-.652-2.928c-4.416.983-7.846 3.677-10.3 6.6-2.446 2.914-4.007 6.157-4.659 8.455l2.887.818Z"
      fill="#F9F3E5"
    />
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_225_92" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_225_92"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Checked;
