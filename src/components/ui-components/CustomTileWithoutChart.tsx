import { Box, Collapse, Flex, Text, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { walterFedyBlue } from "../../utils/constants";

interface ICustomTileWithoutChartProps {
  title: string;
}

const CustomTileWithoutChart: React.FunctionComponent<
  ICustomTileWithoutChartProps
> = (props) => {
  const { isOpen: isTileOpen, onToggle: onTileToggle } = useDisclosure();
  return (
    <Flex
      width={{ base: "100%", xl: "100%" }}
      minW="80%"
      direction="column"
      justify="space-between"
      border={`${walterFedyBlue} 2px solid`}
      mt={4}
    >
      <Flex
        height="50px"
        bg="white"
        align="center"
        px={4}
        borderBottom={`${walterFedyBlue} 2px solid`}
        onClick={onTileToggle}
        cursor="pointer"
      >
        <Text
          as="h3"
          fontSize="1.2rem"
          fontWeight="bold"
          color={walterFedyBlue}
          my="auto"
        >
          {props.title}
        </Text>
      </Flex>
      <Collapse in={isTileOpen} animateOpacity>
        <Box w="100%">{props.children}</Box>
      </Collapse>
    </Flex>
  );
};

export default CustomTileWithoutChart;
