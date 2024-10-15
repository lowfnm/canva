import CrownIcon from "@/icons/CrownIcon";
import classNames from "classnames";
import React, { HTMLAttributes } from "react";

type ProButtonProps = HTMLAttributes<HTMLButtonElement> & {};

const ProButton: React.FC<ProButtonProps> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        "flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 transition duration-200",
        className
      )}
    >
      <CrownIcon color="#f5cd67" width={16} height={16} />
      Try Pro for 30 days
    </button>
  );
};

export default ProButton;
