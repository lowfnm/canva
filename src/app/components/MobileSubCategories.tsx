import React from "react";
import { RecursiveMenu } from "./RecursiveMenu";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { RecursiveMenuItem } from "@/types/Sidebar";
import { MenuCategory } from "@/types/MobileMenu";

type MobileBrandMenuProps = {
  title: string;
  options: RecursiveMenuItem[];
  onSubCategoryChange: (category: MenuCategory) => void;
};

const MobileSubCategories: React.FC<MobileBrandMenuProps> = ({
  title,
  options,
  onSubCategoryChange,
}) => {
  return (
    <div>
      <div className="flex gap-2 items-center py-4 px-6  border-b border-b-slate-200">
        <ArrowLeftIcon
          onClick={() => onSubCategoryChange(MenuCategory.MAIN)}
          width={24}
          height={24}
        />{" "}
        <h4 className="font-semibold m-0">{title}</h4>
      </div>
      <div>
        <RecursiveMenu items={options} />
      </div>
    </div>
  );
};

export default MobileSubCategories;
