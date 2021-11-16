import { Box } from "@chakra-ui/layout";
import { DefaultRawDatum, ResponsivePie } from "@nivo/pie";
import * as React from "react";

interface IProjectPerformancePieChartProps {
  data: unknown[];
  fullSize?: boolean;
}

const CenteredMetric = ({
  dataWithArc,
  centerX,
  centerY,
}: {
  dataWithArc: DefaultRawDatum[];
  centerX: number;
  centerY: number;
}) => {
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });
  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: "28px", fontWeight: "600" }}
    >
      {`$${Math.floor(total / 1000)}K`}
    </text>
  );
};

const ProjectPerformancePieChart: React.FunctionComponent<IProjectPerformancePieChartProps> =
  ({ data, fullSize }) => {
    return (
      <Box height="100%" width="100%">
        <ResponsivePie
          data={data}
          margin={{
            top: 20,
            right: 150,
            bottom: fullSize ? 100 : 40,
            left: 150,
          }}
          innerRadius={0.65}
          cornerRadius={3}
          padAngle={0.7}
          valueFormat={(value) => `$${Math.floor(value / 1000)}K`}
          activeOuterRadiusOffset={8}
          layers={[
            "arcs",
            "arcLabels",
            "arcLinkLabels",
            "legends",
            CenteredMetric,
          ]}
          legends={
            fullSize
              ? [
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 100,
                    itemsSpacing: 20,
                    itemWidth: 150,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 8,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]
              : []
          }
        />
      </Box>
    );
  };

export default ProjectPerformancePieChart;
