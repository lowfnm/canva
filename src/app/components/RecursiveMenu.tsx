"use client";

import { RecursiveMenuItem } from "@/types/Sidebar";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import cn from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type RecursiveMenuProps = {
  items: RecursiveMenuItem[];
};

export const RecursiveMenu: React.FC<RecursiveMenuProps> = ({ items }) => {
  const navigate = useRouter();
  const pathname = usePathname();

  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (label?: string) => {
    if (label) {
      setOpenItems((prev) => {
        const newOpenItems = {
          ...prev,
          [label]: !prev[label],
        };
        return newOpenItems;
      });
    }
  };

  const handleNavigate = (path?: string) => {
    if (path) {
      navigate.push(path);
    }
  };

  return (
    <ul className="overflow-y-auto">
      {items.map(({ label, children, icon: Icon, path, categoryLabel }) => (
        <li key={path} className="mb-2">
          <div
            className={cn(
              "flex items-center px-3 cursor-pointer rounded-md transition-colors",
              !categoryLabel &&
                (pathname === path
                  ? "bg-sky-100 hover:bg-sky-200"
                  : "hover:bg-slate-100")
            )}
          >
            {categoryLabel ? (
              <h6 className="text-paragraphS font-bold px-3 py-2 cursor-default pl-10 mt-2" >
                {categoryLabel}
              </h6>
            ) : (
              <>
                {" "}
                {Icon ? (
                  <span className="p-2">
                    <Icon width={24} height={24} />
                  </span>
                ) : (
                  children && (
                    <span
                      onClick={() => toggleItem(label)}
                      className={cn(
                        "p-2 rounded-md transition-colors",
                        pathname === path
                          ? "hover:bg-sky-300"
                          : "hover:bg-slate-200"
                      )}
                    >
                      {label && openItems[label] ? (
                        <ChevronDownIcon className="w-5 h-5" />
                      ) : (
                        <ChevronRightIcon className="w-5 h-5" />
                      )}
                    </span>
                  )
                )}
                <span
                  onClick={() => handleNavigate(path)}
                  className={cn(
                    "text-paragraphM select-none p-3 truncate w-full",
                    children || Icon ? "" : "pl-10"
                  )}
                >
                  {label}
                </span>
              </>
            )}
          </div>
          {label && openItems[label] && children && (
            <div className="mt-2 ml-2">
              <RecursiveMenu items={children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
