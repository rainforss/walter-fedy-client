import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Text } from "@chakra-ui/layout";
import * as React from "react";
import { walterFedyBlue, walterFedyRed } from "../utils/constants";
import { RiEditFill, RiSaveFill } from "react-icons/ri";
import { FaDotCircle, FaAngleDown, FaAngleUp } from "react-icons/fa";
import Budget from "./financial-components/Budget";
import Cash from "./financial-components/Cash";
import ProjectPerformance from "./financial-components/ProjectPerformance";
import Revenue from "./financial-components/Revenue";
import Icon from "@chakra-ui/icon";
import { Collapse } from "@chakra-ui/transition";

interface IProjectCardProps {
  projectName: string;
  projectNumber: string;
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({
  projectName,
  projectNumber,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      w="80%"
      border={`${walterFedyRed} 2px solid`}
      borderRadius="10px"
      ml={8}
      my={12}
    >
      <Flex
        height="60px"
        bg={walterFedyRed}
        px={4}
        align="center"
        justify="space-between"
        borderBottom={isOpen ? `${walterFedyRed} 2px solid` : "none"}
      >
        <Flex color="whiteAlpha.800" fontSize="1.7rem" fontWeight="bold">
          <Text as="span">{projectName}</Text>&nbsp;-&nbsp;
          <Text as="span">{projectNumber}</Text>
        </Flex>
        <Flex>
          <Flex>
            <IconButton
              aria-label="Edit Project"
              color="whiteAlpha.800"
              variant="outline"
              icon={<RiEditFill />}
              mr={4}
              _hover={{ bg: walterFedyBlue }}
            />
            <IconButton
              aria-label="Save Project"
              color="whiteAlpha.800"
              variant="outline"
              icon={<RiSaveFill />}
              mr={4}
              _hover={{ bg: walterFedyBlue }}
            />
            <IconButton
              aria-label="Save Project"
              color="whiteAlpha.800"
              variant="outline"
              icon={isOpen ? <FaAngleUp /> : <FaAngleDown />}
              _hover={{ bg: walterFedyBlue }}
              onClick={onToggle}
            />
          </Flex>
          <Flex align="center" bg="white" ml={5} px={4} borderRadius="5px">
            <Icon as={FaDotCircle} mx={2} color="red" />
            <Icon as={FaDotCircle} mx={2} color="orange" />
            <Icon as={FaDotCircle} mx={2} color="green" />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen}>
        <Flex flexDirection="column" pb={4} px={4}>
          <Budget />
          <Revenue />
          <Cash />
          <ProjectPerformance />
        </Flex>
      </Collapse>
    </Box>
  );
};

export default ProjectCard;
