"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import NotificationIcon from "@/icons/NotificationIcon";
import ProfileSettings from "./ProfileSettings";
import ProButton from "./ProButton";
import RecendDesigns from "./RecendDesigns";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import MobileSubCategories from "./MobileSubCategories";
import { MenuCategory } from "@/types/MobileMenu";
import { MOBILE_OPTIONS } from "@/consts/MobileMenu";
import { APPLICATIONS_OPTIONS, BRAND_OPTIONS } from "@/consts/Sidebar";

const MobileMenu: React.FC = () => {
  const [menuCategory, setMenuCategory] = useState<MenuCategory>(
    MenuCategory.MAIN
  );
  const router = useRouter();

  const handleNavigate = (category?: MenuCategory, path?: string) => {
    if(category) {
      setMenuCategory(category)
      return;
    }
    if (path) {
      router.push(path);
    }
  };

  const handleSetMenuCategory = (category: MenuCategory) => {
    setMenuCategory(category);
  };

  const renderMenuCategory = () => {
    switch (menuCategory) {
      case MenuCategory.MAIN: {
        return (
          <>
            <Dialog.Title>
              <div className="flex justify-between items-center py-4 px-6  border-b border-b-slate-200">
                <h4 className="font-semibold m-0">Menu</h4>
                <NotificationIcon width={24} height={24} />
              </div>
            </Dialog.Title>
            <div className="p-4">
              <ProfileSettings />
            </div>
            <div className="p-4">
              <ProButton className="w-full" />
            </div>
            <nav className="flex flex-col space-y-4 px-6">
              <ul className="flex flex-col gap-2">
                {MOBILE_OPTIONS.map(
                  ({ label, path, icon: Icon, options, category }, index) => (
                    <li
                      className="flex items-center justify-between p-2"
                      key={index}
                      onClick={() => handleNavigate(category, path)}
                    >
                      <span className="flex items-center gap-4 shrink-0 text-paragraphM">
                        <Icon width={24} height={24} /> {label}
                      </span>
                      {options && <ChevronRightIcon width={16} height={16} />}
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className="p-4">
              <RecendDesigns />
            </div>
          </>
        );
      }
      case MenuCategory.BRAND: {
        return (
          <MobileSubCategories
            title="Brand"
            options={BRAND_OPTIONS}
            onSubCategoryChange={handleSetMenuCategory}
          />
        );
      }

      case MenuCategory.APP: {
        return (
          <MobileSubCategories
            title="Apps"
            options={APPLICATIONS_OPTIONS}
            onSubCategoryChange={handleSetMenuCategory}
          />
        );
      }
    }
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/20" />
      <Dialog.Content className="fixed sm:hidden top-0 left-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 ease-out outline-none border-none">
        {renderMenuCategory()}
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default MobileMenu;
