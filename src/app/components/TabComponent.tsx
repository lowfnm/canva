"use client";

import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import classNames from "classnames";
import { ImageCategory, ImageCategoryTitle } from "@/types/Tabs";

type TabComponentProps = {
  tabCategories: ImageCategory[];
};

const TabComponent: React.FC<TabComponentProps> = ({ tabCategories }) => {
  const [selectedTab, setSelectedTab] = useState<ImageCategoryTitle>(
    ImageCategoryTitle.Photo
  );

  return (
    <Tabs.Root
      defaultValue={ImageCategoryTitle.Photo}
      className="flex flex-col"
    >
      <Tabs.List className="flex space-x-4">
        {tabCategories.map((category) => (
          <Tabs.Trigger
            key={category.title}
            value={category.title}
            className={classNames(
              "text-paragraphM border-b-2 py-2 px-4 text-gray-500 font-semibold hover:text-black transition-colors focus:outline-none",
              selectedTab === category.title
                ? "text-black border-b-blue-400"
                : "border-b-white"
            )}
            onClick={() => setSelectedTab(category.title)}
          >
            {category.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value={selectedTab} className="mt-4">
        <div className="grid grid-cols-1 smallLaptop:grid-cols-2 lg:grid-cols-3 gap-4">
          {tabCategories
            .find((category) => category.title === selectedTab)
            ?.images.map((image, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md"
              >
                <div className="p-2">
                  <Image
                    src={image.src}
                    alt={image.description}
                    width={300}
                    height={200}
                    className="object-cover w-full h-48 rounded-lg"
                  />
                </div>
                <div className="p-2">
                  <h4 className="font-medium text-gray-900 text-paragraphM">
                    {image.description}
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TabComponent;
