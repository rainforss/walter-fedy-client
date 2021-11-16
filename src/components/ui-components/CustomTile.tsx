import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import * as React from "react";
import { walterFedyBlue } from "../../utils/constants";
import TextInput from "./TextInput";

interface ICustomTileProps {
  title: string;
  fields: any[];
  chart?: React.ReactElement;
  fullSizeChart?: React.ReactElement;
}

const CustomTile: React.FunctionComponent<ICustomTileProps> = ({
  title,
  fields,
  chart,
  fullSizeChart,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        width="900px"
        minHeight="400px"
        direction="column"
        justify="space-between"
        border={`${walterFedyBlue} 2px solid`}
        borderRadius="10px"
        my={6}
      >
        <Flex height="50px" bg={walterFedyBlue} align="center" px={4}>
          <Text
            as="h3"
            fontSize="1.5rem"
            fontWeight="bold"
            color="whiteAlpha.800"
            my="auto"
          >
            {title}
          </Text>
        </Flex>

        <Flex align="center" mb={6}>
          <Flex w="35%" flexDirection="column">
            {fields.map((f) => (
              <TextInput key={f.id} label={f.name} value={f.value} />
            ))}
          </Flex>

          {chart && (
            <Center
              cursor="pointer"
              w="65%"
              h="300px"
              flexGrow={2}
              onClick={() => onOpen()}
            >
              {chart}
            </Center>
          )}
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={12}>
            {fullSizeChart && (
              <Box w="100%" h="60vh">
                {fullSizeChart}
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomTile;
