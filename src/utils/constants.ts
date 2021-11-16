import { Datum } from "@nivo/bullet";
import { BarData, PieData } from "./types";

export const totalSales: string = "718K";

export const walterFedyBlue = "#616283";

export const walterFedyRed = "#D11E15";

export const projects = [
  { projectName: "Test Project", projectNumber: "0001" },
  { projectName: "Test Project", projectNumber: "0002" },
  { projectName: "Test Project", projectNumber: "0003" },
  { projectName: "Test Project", projectNumber: "0004" },
];

export const projectPerformanceFields = [
  {
    id: "profit",
    name: "Profit",
    value: "150000",
  },
  {
    id: "netLabourMult",
    name: "Net Labour Mult.",
    value: "900000",
  },
];

export const cashFields = [
  {
    id: "unbilled",
    name: "Unbilled Fee Revenue (JTD)",
    value: "300000",
  },
  {
    id: "0-30D",
    name: "0-30D",
    value: "19000",
  },
  {
    id: "31-60D",
    name: "31-60D",
    value: "22000",
  },
  {
    id: "61D+",
    name: "61D+",
    value: "38000",
  },
];

export const revenueFields = [
  {
    id: "feeBilled",
    name: "Fee Billed (JTD)",
    value: "82000",
  },
  {
    id: "feeRevenueEarned",
    name: "Fee Revenue Earned (JTD)",
    value: "89000",
  },
];

export const budgetFields = [
  {
    id: "budget",
    name: "Budget",
    value: "120000",
  },
  {
    id: "spent",
    name: "Spent",
    value: "82000",
  },
  {
    id: "backlog",
    name: "Backlog",
    value: "89000",
  },
  {
    id: "complete",
    name: "% Complete | Spent",
    value: "89000",
  },
];

export const cashData: BarData[] = [
  {
    dateSequence: "1",
    dateRange: "0-30D",
    "Cash Revenue": 16000,
    "Cash RevenueColor": "hsl(324, 70%, 50%)",
  },
  {
    dateSequence: "2",
    dateRange: "31-60D",
    "Cash Revenue": 22000,
    "Cash RevenueColor": "hsl(324, 70%, 50%)",
  },
  {
    dateSequence: "3",
    dateRange: "60D+",
    "Cash Revenue": 28000,
    "Cash RevenueColor": "hsl(324, 70%, 50%)",
  },
];

export const revenueData: Datum[] = [
  {
    id: "Revenue",
    ranges: [50000, 0, 70000, 0, 120000],
    measures: [82000],
    markers: [90000],
  },
];

export const budgetData: Datum[] = [
  {
    id: "Budget",
    ranges: [50000, 0, 70000, 0, 120000],
    measures: [82000],
    markers: [90000],
  },
];

export const projectPerformanceData: PieData[] = [
  {
    id: "Building Engineering",
    label: "Building Engineering",
    value: 140000,
    color: "hsl(315, 70%, 50%)",
  },
  {
    id: "Civil Engineering",
    label: "Civil Engineering",
    value: 223000,
    color: "hsl(127, 70%, 50%)",
  },
  {
    id: "Land Development",
    label: "Land Development",
    value: 171000,
    color: "hsl(340, 70%, 50%)",
  },
  {
    id: "Architecture",
    label: "Architecture",
    value: 180000,
    color: "hsl(275, 70%, 50%)",
  },
  {
    id: "Site Development",
    label: "Site Development",
    value: 138000,
    color: "hsl(4, 70%, 50%)",
  },
];
