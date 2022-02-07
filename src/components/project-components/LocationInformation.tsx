import { Box } from "@chakra-ui/react";
import * as React from "react";
import GoogleMapReact from "google-map-react";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import { TriangleDownIcon } from "@chakra-ui/icons";

interface ILocationInformationProps {}

const LocationInformation: React.FunctionComponent<
  ILocationInformationProps
> = () => {
  return (
    <CustomTileWithoutChart title="Location">
      <Box height="400px">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBd4vn5nmYUTEaoT_15iXlSzryic5gZWlg" }}
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          <TriangleDownIcon
            lat={-34.397}
            lng={150.644}
            text="The Marker"
            color="red"
            fontSize="20px"
          />
        </GoogleMapReact>
      </Box>
    </CustomTileWithoutChart>
  );
};

export default LocationInformation;
