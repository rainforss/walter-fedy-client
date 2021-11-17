import { DefaultRawDatum } from "@nivo/pie";
import { IconType } from "react-icons";

export type PieData = DefaultRawDatum & {
  label: string;
  color: string;
};

export type NavItem = {
  text: string;
  url: string;
  icon: IconType;
};

export type BarData = Record<string, string | number>;
