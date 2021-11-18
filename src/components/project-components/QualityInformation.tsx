import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import * as React from "react";
import { threeIndicators } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import StatusIndicator from "../ui-components/StatusIndicator";

interface IQualityInformationProps {}

const QualityInformation: React.FunctionComponent<IQualityInformationProps> = (
  props
) => {
  return (
    <CustomTileWithoutChart title="Quality">
      <Table variant="striped" colorScheme="teal" width="95%" mx="auto" my={4}>
        <Thead>
          <Tr fontSize="0.8rem">
            <Th p={2} fontSize="0.7rem">
              Reviews
            </Th>
            <Th p={2} isDate fontSize="0.7rem">
              Date/Complete
            </Th>
            <Th p={4} fontSize="0.7rem">
              Overall 
              <StatusIndicator indicators={threeIndicators} status="orange" />
            </Th>
            <Th p={2} isNumeric fontSize="0.7rem">              
            </Th>
            <Th p={2} fontSize="0.7rem">
              Issues
            </Th>
            <Th p={2} fontSize="0.7rem">              
            </Th>
            <Th p={2} isNumeric fontSize="0.7rem">              
            </Th>
            <Th p={2} isNumeric fontSize="0.7rem">              
            </Th>
          </Tr>
        </Thead>
        <Tbody fontSize="0.75rem">
          <Tr>
            <Td p={2}>SD</Td>
            <Td p={2} isDate>
              2020-01-01
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="green" />
            </Td>
            <Td p={2}>            
            </Td>
            <Td p={2}>
              Active
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="green" />
            </Td>
            <Td p={2}>
              123
            </Td>
            <Td p={2}>
              456
            </Td>
          </Tr>
          <Tr>
            <Td p={2}>DD</Td>
            <Td p={2} isDate>
              2020-02-02
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="orange" />
            </Td>
            <Td p={2}>            
            </Td>
            <Td p={2}>
              Resolved
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="green" />
            </Td>
            <Td p={2}>
              789
            </Td>
            <Td p={2}>
              1011
            </Td>
          </Tr>
          <Tr>
            <Td p={2}>CD</Td>
            <Td p={2} isDate>
              2020-03-03
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="red" />
            </Td>
            <Td p={2}>            
            </Td>
            <Td p={2}>
              Probability of Claim
            </Td>
            <Td p={2}>              
            </Td>
            <Td p={2}>              
            </Td>
            <Td p={2}>              
            </Td>
          </Tr>
          <br/>
          <Tr>
            <Td p={2}>Construction</Td>
            <Td p={2}>
              321 | 456
            </Td>
            <Td p={2} isNumeric>
              $1234
            </Td>
            <Td p={2}>            
            </Td>
            <Td p={2}>
              Insurer Involved
            </Td>
            <Td p={2}>   
              <StatusIndicator indicators={threeIndicators} status="green" />           
            </Td>
            <Td p={2}>              
            </Td>
            <Td p={2}>              
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </CustomTileWithoutChart>
  );
};

export default QualityInformation;
