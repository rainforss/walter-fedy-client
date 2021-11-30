import { Table, Tbody, Td, Tr } from "@chakra-ui/react";
import * as React from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";;

interface ILocationInformationProps {
}

const LocationInformation :  React.FunctionComponent<ILocationInformationProps> = (
  props
) => {
  return (
    <CustomTileWithoutChart title="Location">
      <Table variant="striped" colorScheme="teal" width="95%" mx="auto" my={4}>
        <Tbody fontSize="0.75rem">
          <Tr>
            <Td p={2}>  
              <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
              >
                {true && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
              </GoogleMap>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </CustomTileWithoutChart>
  );
};

const LocationInformationWrappedWithGoogleMap = withGoogleMap(LocationInformation);
const LocationInformationWrappedWithScriptjs = withScriptjs(LocationInformationWrappedWithGoogleMap);

export default LocationInformationWrappedWithScriptjs;
