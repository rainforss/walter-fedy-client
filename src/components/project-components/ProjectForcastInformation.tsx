import * as React from "react";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import { Table, Tbody, Td, Tr } from "@chakra-ui/react";
import Plot from 'react-plotly.js';

interface IProjectForcastInformationProps {}

const ProjectForcastInformation: React.FunctionComponent<IProjectForcastInformationProps> = (
  props
) => {
  
  return (
    <CustomTileWithoutChart title="Project Forecast">
    <Table variant="striped" colorScheme="teal" width="95%" mx="auto" my={4}>
      <Tbody fontSize="0.75rem">
        <Tr>
          <Td p={2}>  
          <Plot
            data={[
              {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                y: [0, 50, 100, 125, 200, 222, 250, 350],
                fill: 'tozeroy',
                type: 'scatter',
                name: 'Vendor'
              },
              {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                y: [3, 150, 200, 275, 300, 325, 330, 340],
                fill: 'tonexty',
                type: 'scatter',
                name: 'Provider'
              }
            ]}
            layout={{width: 320, height: 240, title: 'Forecast'}}
          />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </CustomTileWithoutChart>
  );
};

export default ProjectForcastInformation;
