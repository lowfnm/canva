"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { RecursiveMenu } from "./RecursiveMenu";

import Image from "next/image";
import RecendDesigns from "./RecendDesigns";
import CloseIcon from "@/icons/CloseIcon";
import { PlusIcon } from "@radix-ui/react-icons";
import ProButton from "./ProButton";
import {
  APPLICATIONS_OPTIONS,
  BRAND_OPTIONS,
  SIDEBAR_ICONS_OPTIONS,
  TEMPLATE_OPTIONS,
} from "@/consts/Sidebar";
import TrashIcon from "@/icons/TrashIcon";

const HomeSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const pathname = usePathname();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleChangeIsMenu = (link: string) => {
    if (pathname.includes(link)) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };

  const getOptionsByPathname = () => {
    if (pathname.includes("/templates")) {
      return TEMPLATE_OPTIONS;
    } else if (pathname.includes("/brand")) {
      return BRAND_OPTIONS;
    } else if (pathname.includes("/applications")) {
      return APPLICATIONS_OPTIONS;
    } else {
      return [];
    }
  };

  const options = getOptionsByPathname();

  return (
    <div className="hidden h-screen bg-slate-50 sticky top-0 z-10 sm:block">
      <div className="h-full flex">
        <div className="w-fit p-2 h-full border-r border-r-slate-200">
          <div className="flex flex-col gap-4">
            {SIDEBAR_ICONS_OPTIONS.map(({ label, icon: Icon, link }) => (
              <Link
                onClick={() => handleChangeIsMenu(link)}
                key={link}
                href={link}
              >
                <span className="flex flex-col items-center text-paragraphS">
                  <span
                    className={cn(
                      "p-2 rounded-md",
                      pathname === link ? "bg-slate-100" : ""
                    )}
                  >
                    <Icon
                      className={cn(
                        pathname.includes(link) ? "text-blue-400" : ""
                      )}
                      width={32}
                      height={32}
                    />
                  </span>{" "}
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={cn(
            "p-4 w-64 flex flex-col smallLaptop:static absolute top-0 left-[88px] h-full bg-slate-50 z-20",
            isOpen ? "flex" : "hidden smallLaptop:block"
          )}
        >
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-center justify-between">
              <Image
                src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
                alt="Canva Logo"
                width={80}
                height={30}
              />
              <button
                onClick={handleCloseMenu}
                className="p-2 rounded-lg border border-slate-200 smallLaptop:hidden"
              >
                <CloseIcon width={16} height={16} />
              </button>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 transition duration-200">
              <PlusIcon width={24} height={24} />
              Create design
            </button>
            <ProButton />
          </div>
          <div className="grow overflow-y-auto">
            {options.length > 0 ? (
              <RecursiveMenu items={options} />
            ) : (
              <RecendDesigns />
            )}
          </div>
          <Link
            className={cn(
              "flex items-center gap-2 text-paragraphM p-2 rounded-md",
              pathname === "/trash" ? "bg-blue-200" : ""
            )}
            href="/trash"
          >
            <TrashIcon width={24} height={24} />
            Trash
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
