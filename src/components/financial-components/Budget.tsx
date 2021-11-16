import * as React from "react";
import { budgetData, budgetFields } from "../../utils/constants";
import CustomTile from "../ui-components/CustomTile";
import BudgetBulletChart from "./BudgetBulletChart";

interface IBudgetProps {}

const Budget: React.FunctionComponent<IBudgetProps> = (props) => {
  return (
    <CustomTile
      title="Budget"
      fields={budgetFields}
      chart={<BudgetBulletChart data={budgetData} />}
      fullSizeChart={<BudgetBulletChart data={budgetData} fullSize />}
    />
  );
};

export default Budget;
