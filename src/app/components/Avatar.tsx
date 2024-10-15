import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import cn from "classnames";

type UserAvatarProps = {
  className?: string;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ className }) => {
  return (
    <Avatar.Root
      className={cn(
        "inline-flex items-center justify-center overflow-hidden align-middle w-8 h-8 rounded-full bg-gray-200",
        className
      )}
    >
      <Avatar.Image
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        alt="User Avatar"
      />

      <Avatar.Fallback
        className="flex items-center justify-center w-full h-full bg-gray-400 text-white"
        delayMs={600}
      >
        AB
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default UserAvatar;
