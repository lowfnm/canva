import classNames from "classnames";
import React from "react";

const RecendDesigns = () => {
  return (
    <div className="px-1 py-4 rounded-md border border-dashed border-slate-400">
      <p className={classNames("text-paragraphS font-medium text-center mb-2")}>Recent Designs</p>
      <p className={classNames("text-paragraphS font-medium text-center text-gray-400")}>Designs you have created or opened recently will be displayed here</p>
    </div>
  );
};

export default RecendDesigns;
