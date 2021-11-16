import * as React from "react";
import { revenueData, revenueFields } from "../../utils/constants";
import CustomTile from "../ui-components/CustomTile";
import RevenueBulletChart from "./RevenueBulletChart";

interface IRevenueProps {}

const Revenue: React.FunctionComponent<IRevenueProps> = (props) => {
  return (
    <CustomTile
      title="Revenue"
      fields={revenueFields}
      chart={<RevenueBulletChart data={revenueData} />}
      fullSizeChart={<RevenueBulletChart data={revenueData} fullSize />}
    />
  );
};

export default Revenue;
