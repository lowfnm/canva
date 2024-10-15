import React from "react";

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m4 4 8 8m-8 0 8-8"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="1.5"
      ></path>
    </svg>
  );
};

export default CloseIcon;
