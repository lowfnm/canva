"use client";

import { MOBILE_SIDEBAR_LEFT_ICONS_OPTIONS, MOBILE_SIDEBAR_RIGHT_ICONS_OPTIONS } from "@/consts/MobileSidebar";
import { PlusIcon } from "@radix-ui/react-icons";
import cn from "classnames";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const MobileSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (link: string) => {
    router.push(link);
  };
  return (
    <div className="fixed sm:hidden bottom-0 left-0 w-full bg-white border-t border-t-slate-100 py-2">
      <nav>
        <ul className="flex items-center gap-4">
          {MOBILE_SIDEBAR_LEFT_ICONS_OPTIONS.map(
            ({ label, link, icon: Icon }, index) => (
              <li
                onClick={() => handleNavigate(link)}
                key={index}
                className="flex flex-col items-center w-full text-paragraphS"
              >
                <Icon
                  className={cn(pathname.includes(link) ? "text-blue-400" : "")}
                  width={24}
                  height={24}
                />{" "}
                {label}
              </li>
            )
          )}
          <li className="w-full flex items-center justify-center">
            <button className="rounded-full bg-blue-400 text-paragraphS p-2">
              <PlusIcon color="#fff" width={24} height={24} />
            </button>
          </li>
          {MOBILE_SIDEBAR_RIGHT_ICONS_OPTIONS.map(
            ({ label, link, icon: Icon }, index) => (
              <li
                onClick={() => handleNavigate(link)}
                key={index}
                className="flex flex-col items-center w-full text-paragraphS"
              >
                <Icon
                  className={cn(pathname.includes(link) ? "text-blue-400" : "")}
                  width={24}
                  height={24}
                />{" "}
                {label}
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidebar;
