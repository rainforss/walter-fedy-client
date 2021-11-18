import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Text } from "@chakra-ui/layout";
import * as React from "react";
import { walterFedyBlue, walterFedyRed } from "../utils/constants";
import { RiEditFill, RiSaveFill } from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Budget from "./financial-components/Budget";
import Cash from "./financial-components/Cash";
import ProjectPerformance from "./financial-components/ProjectPerformance";
import Revenue from "./financial-components/Revenue";
import { Collapse } from "@chakra-ui/transition";
import { Tooltip } from "@chakra-ui/react";
import ClientInformation from "./project-components/ClientInformation";
import WfTeam from "./project-components/WfTeam";
import ProjectNotes from "./note-components/ProjectNotes";
import QualityInformation from "./project-components/QualityInformation";
import Risks from "./note-components/Risks";
import Lessons from "./note-components/Lessons";
import { CheckCircleIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons";
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
      w={{ base: "100%", lg: "100%" }}
      minW="300px"
      border={`${walterFedyRed} 2px solid`}
      mx={{ base: 0, lg: 2 }}
      my={4}
      bg="white"
    >
      <Flex
        height="60px"
        bg="white"
        px={4}
        align="center"
        justify="space-between"
        borderBottom={isOpen ? `${walterFedyRed} 2px solid` : "none"}
      >
        <Flex color={walterFedyRed} fontSize="1rem" fontWeight="bold">
          <Text as="span">{projectName}</Text>&nbsp;-&nbsp;
          <Text as="span">{projectNumber}</Text>
        </Flex>
        <Flex>
          <Flex>
            <IconButton
              aria-label="Edit Project"
              color={walterFedyRed}
              variant="outline"
              icon={<RiEditFill />}
              size="xs"
              mr={4}
              _hover={{ bg: walterFedyBlue }}
            />
            <IconButton
              aria-label="Save Project"
              color={walterFedyRed}
              variant="outline"
              icon={<RiSaveFill />}
              size="xs"
              mr={4}
              _hover={{ bg: walterFedyBlue }}
            />
            <IconButton
              aria-label="Save Project"
              color={walterFedyRed}
              variant="outline"
              icon={isOpen ? <FaAngleUp /> : <FaAngleDown />}
              size="xs"
              _hover={{ bg: walterFedyBlue }}
              onClick={onToggle}
            />
          </Flex>
          <Flex
            align="center"
            bg="white"
            ml={5}
            px={{ base: 1, md: 4 }}
            borderRadius="5px"
            fontSize={{ base: "10px", md: "16px" }}
          >
            <Tooltip hasArrow label="Revenue">
              <WarningIcon mx={2} color="red" />
            </Tooltip>
            <Tooltip hasArrow label="Budget">
              <InfoIcon mx={2} color="orange" />
            </Tooltip>
            <Tooltip hasArrow label="Cash">
              <CheckCircleIcon mx={2} color="green" />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justify="flex-start"
          pb={4}
          px={4}
          width="100%"
        >
          <Flex
            flexDirection="column"
            pb={4}
            width={{ base: "100%", lg: "34%" }}
          >
            <ClientInformation />
            <WfTeam />
          </Flex>
          <Flex
            flexDirection="column"
            pb={4}
            mx="1%"
            width={{ base: "100%", lg: "40%" }}
          >
            <Budget />
            <Revenue />
            <Cash />
            <ProjectPerformance />
          </Flex>
          <Flex
            flexDirection="column"
            pb={4}
            width={{ base: "100%", lg: "24%" }}
          >
            <ProjectNotes />
            <Risks />
            <Lessons />
          </Flex>
          {/* <Flex flexDirection="column" pb={4} px={4} width="30%">
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Stage: [lead | opp | project]</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Sector</Td>
                </Tr>
                <Tr>
                  <Td>Project Type</Td>
                </Tr>
                <Tr>
                  <Td>Contract Type</Td>
                </Tr>
                <Tr>
                  <Td>Const'n Value</Td>
                </Tr>
              </Tbody>
            </Table>
            <br />
            <br />
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Client Info</Th>
                  <Th>Revenue</Th>
                  <Th>Pipe</Th>
                  <Th>Relationship</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Owner</Td>
                  <Td>$100 in last 3 yrs</Td>
                  <Td>$400 in pipe</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Billing Client</Td>
                  <Td>$200 in last 6 yrs</Td>
                  <Td>$800 in pipe</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <br />
            <br />
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>WF Team</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>PM</Td>
                  <Td>Resource Ok?</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Design Team (sub list)</Td>
                  <Td>Dynamics/Spirit Healthy</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>CAFR Team (sub list)</Td>
                  <Td>Collaboration Rating</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Quality Team (sub list)</Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
            <br />
            <br />
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Schedule</Th>
                  <Th>On Track</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Pursuit Start | End</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Design Start | End</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tender Date</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Construction Start | End</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      px={{ base: 1, md: 4 }}
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                </Tr>
                <br />
                <Tr>
                  <Td>Next Milestone</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>

          <br />
          <Flex flexDirection="column" pb={4}>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Quality</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Reviews</Td>
                  <Td>Date/Completed</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                  <Td></Td>
                  <Td>Issues</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>SD</Td>
                  <Td>2020-01-01</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                  <Td></Td>
                  <Td>Active</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                  <Td>#</Td>
                  <Td>$</Td>
                </Tr>
                <Tr>
                  <Td>DD</Td>
                  <Td>2020-06-01</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                  <Td></Td>
                  <Td>Resolved</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                  <Td>#</Td>
                  <Td>$</Td>
                </Tr>
                <Tr>
                  <Td>CD</Td>
                  <Td>2020-11-11</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                  <Td></Td>
                  <Td>Probability of claim</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="red" />
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Construction</Td>
                  <Td>#RFIs | #Cos</Td>
                  <Td>$1000 Impact</Td>
                  <Td></Td>
                  <Td>Insurer Involved</Td>
                  <Td>
                    <Flex
                      align="center"
                      bg="white"
                      borderRadius="5px"
                      fontSize={{ base: "10px", md: "16px" }}
                    >
                      <Icon as={FaDotCircle} mx={2} color="orange" />
                      <Icon as={FaDotCircle} mx={2} color="green" />
                    </Flex>
                  </Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Flex>

        <Flex flexDirection="column" pb={4} width="10%">
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Project Notes</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>memo w/ timestamp</Td>
              </Tr>
              <Tr>
                <Td></Td>
              </Tr>
              <Tr>
                <Td></Td>
              </Tr>
              <Tr>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
          <br />
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Risks</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>memo w/ timestamp (subgrid?)</Td>
              </Tr>
              <Tr>
                <Td>issue | migration | solved by?</Td>
              </Tr>
              <Tr>
                <Td></Td>
              </Tr>
              <Tr>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
          <br />
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Lessons Learned</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>link to something</Td>
              </Tr>
              <Tr>
                <Td>during the job - Possible link to SPO doc library</Td>
              </Tr>
              <Tr>
                <Td></Td>
              </Tr>
              <Tr>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table> */}
        </Flex>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justify="flex-start"
          pb={4}
          px={4}
          width="100%"
        >
          <Flex
            flexDirection="column"
            pb={4}
            width={{ base: "100%", lg: "100%" }}
          >
            <QualityInformation />
          </Flex>
        </Flex>
      </Collapse>
    </Box>
  );
};

export default ProjectCard;
