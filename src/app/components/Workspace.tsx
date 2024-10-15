"use client";

import React from "react";
import SearchComponent from "./SearchComponent";
import SettingsIcon from "@/icons/SettingsIcon";
import NotificationIcon from "@/icons/NotificationIcon";
import ProfileSettings from "./ProfileSettings";
import BurgerIcon from "@/icons/BurgerIcon";
import MobileMenu from "./MobileMenu";
import * as Dialog from "@radix-ui/react-dialog";

type WorkspaceProps = {
  isSearch: boolean;
};

const Workspace: React.FC<WorkspaceProps> = ({ isSearch }) => {
  return (
    <Dialog.Root>
      <div className="w-full p-0 py-4 sm:pl-6 sm:py-1 sticky top-0 bg-white">
        <div className="w-full flex items-center justify-end gap-4">
          <Dialog.Trigger asChild>
            <button className="block sm:hidden p-2 rounded-lg shadow-lg bg-white">
              <BurgerIcon width={24} height={24} />
            </button>
          </Dialog.Trigger>
          {isSearch && <SearchComponent options={["test", "test2"]} />}
          <div className="hidden sm:flex items-center justify-end gap-2">
            <div className="px-2 py-2 cursor-pointer rounded-md hover:bg-slate-100 transition-colors">
              <SettingsIcon width={24} height={24} />
            </div>
            <div className="px-2 py-2 cursor-pointer rounded-md hover:bg-slate-100 transition-colors">
              <NotificationIcon width={24} height={24} />
            </div>
            <ProfileSettings />
          </div>
        </div>
        <MobileMenu />
      </div>
    </Dialog.Root>
  );
};

export default Workspace;
