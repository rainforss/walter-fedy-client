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

export type Indicator = {
  status: string;
  color: string;
  description: string;
};

export type ProjectNote = {
  createdBy: string;
  date: Date;
  body: string;
};

export type Risk = {
  risk: string;
  date: Date;
  issue: string;
  mitigation: string;
  solvedBy: string;
};

export type LessonLearned = {
  createdBy: string;
  topic: string;
  link: string;
};
