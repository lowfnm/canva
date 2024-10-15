import React from "react";

const NotificationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M13.5 19H15a3 3 0 0 1-6 0h1.5a1.5 1.5 0 0 0 3 0z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.04 17.5h.21a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5h.21c1-1.15 1.82-2.7 1.82-5.97v-1.3a6.22 6.22 0 0 1 4.87-6.08 1.5 1.5 0 1 1 2.7 0 6.22 6.22 0 0 1 4.87 6.07v1.3c0 3.27.83 4.82 1.82 5.98zm-1.87 0c-.99-1.52-1.45-3.3-1.45-5.97v-1.3a4.72 4.72 0 0 0-9.44 0v1.3c0 2.67-.46 4.45-1.45 5.97h12.34z"
      ></path>
    </svg>
  );
};

export default NotificationIcon;
