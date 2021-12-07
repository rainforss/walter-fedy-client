import * as React from "react";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import { Table, Tbody, Td, Tr } from "@chakra-ui/react";
import Plot from 'react-plotly.js';
import { plotData } from "../../utils/constants";

interface IProjectForecastInformationProps {}

const ProjectForecastInformation: React.FunctionComponent<IProjectForecastInformationProps> = (
  props
) => {
  
  return (
    <CustomTileWithoutChart title="Project Forecast">
    <Table variant="striped" colorScheme="teal" width="95%" mx="auto" my={4}>
      <Tbody fontSize="0.75rem">
        <Tr>
          <Td p={2}>  
          <Plot
            data={plotData}
            layout={{width: 320, height: 240, title: 'Forecast'}}
          />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </CustomTileWithoutChart>
  );
};

export default ProjectForecastInformation;
