import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import UserAvatar from "./Avatar";
import { PROFILE_OPTIONS } from "@/consts/Profile";

const ProfileSettings: React.FC = () => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="w-full focus:outline-none select-none hover:bg-slate-100 transition-colors rounded-lg px-2 py-1">
          <div className="flex items-center gap-3 w-full">
            <UserAvatar />
            <div className="flex flex-col gap-0.5 grow">
              <h3 className="text-paragraphS font-semibold text-left">
                Personal
              </h3>
              <p className="text-paragraphS text-slate-600 text-left">Admin</p>
            </div>
            <ChevronDownIcon width={16} height={16} />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="bg-white border border-gray-200 rounded-md shadow-lg p-2 min-w-[150px]"
            sideOffset={5}
          >
            <div className="flex items-center gap-4">
              <UserAvatar className="w-12 h-12" />
              <div>
                <h4 className="text-paragraphL">Admin Admin</h4>
                <p className="text-paragraphS text-gray-500">
                  admin-test@gmail.com
                </p>
              </div>
            </div>
            <DropdownMenu.Separator className="h-px bg-gray-200 my-2" />

            {PROFILE_OPTIONS.map(({ label }, index) => (
              <DropdownMenu.Item
                key={index}
                className="px-3 py-2 text-paragraphM hover:bg-gray-100 hover:outline-none rounded-md cursor-pointer"
              >
                {label}
              </DropdownMenu.Item>
            ))}

            <DropdownMenu.Separator className="h-px bg-gray-200 my-2" />

            <DropdownMenu.Item className="px-3 py-2 text-paragraphM hover:bg-gray-100 hover:outline-none rounded-md cursor-pointer">
              Logout
            </DropdownMenu.Item>

            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default ProfileSettings;
