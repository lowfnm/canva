"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length < 2) {
    return null;
  }

  const breadcrumbItems = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: index < segments.length - 1 ? href : null,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 py-4 ">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="text-paragraphM hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-paragraphM cursor-default">{item.label}</span>
          )}
          {index < breadcrumbItems.length - 1 && (
            <span className="text-gray-400"><ChevronRightIcon width={16} height={16} /></span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
