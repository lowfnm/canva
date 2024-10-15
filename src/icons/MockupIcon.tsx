import React from "react";

const MockupIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m18.378 13.579 2.009.828c.817.383.817 1.393 0 1.776l-6.907 3.238c-.817.383-2.143.383-2.96 0l-6.907-3.238c-.817-.383-.817-1.393 0-1.776l2.009-.828"
        stroke="currentColor"
        stroke-width="1.44"
      ></path>
      <path
        d="m18.42 10.108 1.967.812c.817.383.817 1.393 0 1.776l-6.907 3.238c-.817.383-2.143.383-2.96 0l-6.907-3.238c-.817-.383-.817-1.393 0-1.776l1.967-.812"
        stroke="currentColor"
        stroke-width="1.44"
      ></path>
      <path
        clip-rule="evenodd"
        d="m3.613 7.432 6.907-2.849c.817-.383 2.143-.383 2.96 0l6.907 2.85c.817.382.817 1.392 0 1.775l-6.907 3.238c-.817.383-2.143.383-2.96 0L3.613 9.208c-.817-.383-.817-1.393 0-1.776Z"
        stroke="currentColor"
        stroke-width="1.44"
      ></path>
    </svg>
  );
};

export default MockupIcon;
