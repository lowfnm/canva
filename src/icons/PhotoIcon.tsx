import React from "react";

const PhotoIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 8.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Zm4-2.5h10A2.5 2.5 0 0 1 19.5 7v4.23l-.853-.854c-.485-.485-.892-.892-1.257-1.184-.384-.307-.79-.546-1.287-.616a2.625 2.625 0 0 0-.74 0c-.497.07-.903.309-1.287.616-.365.292-.772.7-1.257 1.184l-7.943 7.943A2.488 2.488 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5Zm-.983 14.8c.302.128.634.2.983.2h10a2.5 2.5 0 0 0 2.5-2.5v-3.65l-1.884-1.884c-.522-.522-.871-.869-1.163-1.103-.281-.224-.439-.285-.562-.302a1.122 1.122 0 0 0-.317 0c-.122.017-.28.078-.561.302-.292.234-.64.581-1.163 1.103L6.017 19.3Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default PhotoIcon;
