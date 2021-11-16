import { Box } from "@chakra-ui/react";
import { Datum, ResponsiveBullet } from "@nivo/bullet";
import * as React from "react";

interface IBudgetBulletChartProps {
  data: Datum[];
  fullSize?: boolean;
}

const BudgetBulletChart: React.FunctionComponent<IBudgetBulletChartProps> = ({
  data,
  fullSize,
}) => {
  return (
    <Box height="200px" width="100%">
      <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 40, bottom: 50, left: 90 }}
        spacing={60}
        titleAlign="start"
        titleOffsetX={-60}
        measureSize={0.3}
      />
    </Box>
  );
};

export default BudgetBulletChart;
