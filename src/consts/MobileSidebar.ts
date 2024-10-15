import CrownIconSecond from "@/icons/CrownIconSecond";
import HomeIcon from "@/icons/HomeIcon";
import ProjectIcon from "@/icons/ProjectIcon";
import TemplateIcon from "@/icons/TemplateIcon";

const MOBILE_SIDEBAR_LEFT_ICONS_OPTIONS = [
  { label: "Home", icon: HomeIcon, link: "/home" },
  { label: "Projects", icon: ProjectIcon, link: "/projects" },
];
const MOBILE_SIDEBAR_RIGHT_ICONS_OPTIONS = [
  { label: "Templates", icon: TemplateIcon, link: "/templates" },
  { label: "Pro", icon: CrownIconSecond, link: "/pro-plan" },
];

export {
  MOBILE_SIDEBAR_LEFT_ICONS_OPTIONS,
  MOBILE_SIDEBAR_RIGHT_ICONS_OPTIONS,
};
