import React from "react";

const ProjectIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 32 33"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.041 9.447a2.062 2.062 0 0 0 1.845 1.14H23a2.5 2.5 0 0 1 2.5 2.5v.615H6.524l.005-3.006a3.5 3.5 0 0 1 3.5-3.494h4.036a3 3 0 0 1 2.683 1.658l.293.587Zm-10.52 5.755-.01 6.492a4.5 4.5 0 0 0 4.5 4.508H21a4.5 4.5 0 0 0 4.5-4.5v-6.5H6.521Zm7.544-9.5h-4.036a5 5 0 0 0-5 4.992L5.01 21.692a6 6 0 0 0 6 6.01H21a6 6 0 0 0 6-6v-8.615a4 4 0 0 0-4-4h-4.114a.563.563 0 0 1-.503-.311l-.293-.586a4.5 4.5 0 0 0-4.025-2.488Z"
      ></path>
    </svg>
  );
};

export default ProjectIcon;
