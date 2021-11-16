import { DefaultRawDatum } from "@nivo/pie";

export type PieData = DefaultRawDatum & {
  label: string;
  color: string;
};

export type BarData = Record<string, string | number>;
