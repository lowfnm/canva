export type RecursiveMenuItem = {
  label?: string;
  path?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  categoryLabel?: string;
  children?: RecursiveMenuItem[];
};
