import * as React from "react";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import StatusIndicator from "../ui-components/StatusIndicator";
import { threeIndicators } from "../../utils/constants";

interface IClientInformationProps {}

const ClientInformation: React.FunctionComponent<IClientInformationProps> = (
  props
) => {
  return (
    <CustomTileWithoutChart title="Client Information">
      <Table variant="striped" colorScheme="teal" width="95%" mx="auto" my={4}>
        <Thead>
          <Tr fontSize="0.8rem">
            <Th p={2} fontSize="0.7rem">
              Party
            </Th>
            <Th p={2} isNumeric fontSize="0.7rem">
              Revenue
            </Th>
            <Th p={2} isNumeric fontSize="0.7rem">
              Pipe
            </Th>
            <Th p={2} fontSize="0.7rem">
              Relationship
            </Th>
          </Tr>
        </Thead>
        <Tbody fontSize="0.75rem">
          <Tr>
            <Td p={2}>Owner</Td>
            <Td p={2} isNumeric>
              $56000
            </Td>
            <Td p={2} isNumeric>
              $38000
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="green" />
            </Td>
          </Tr>
          <Tr>
            <Td p={2}>Billing Client</Td>
            <Td p={2} isNumeric>
              $44000
            </Td>
            <Td p={2} isNumeric>
              $29000
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="orange" />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </CustomTileWithoutChart>
  );
};

export default ClientInformation;
