import { Box, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React, { ReactElement } from "react";
import UserProfile from "./UserProfile";
import { Group, User } from "@microsoft/microsoft-graph-types-beta";
import { walterFedyBlue, walterFedyRed } from "../../utils/constants";

interface SidebarChildrenProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onToggle?: () => void;
}

interface SidebarProps {
  AADUser?: User | undefined;
  groupData?: Group[] | undefined;
  imageData?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  children?:
    | ((args: SidebarChildrenProps) => ReactElement)
    | string
    | ReactElement;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  AADUser,
  groupData,
  imageData,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}) => {
  return (
    <Box
      position="fixed"
      top="0"
      h="100vh"
      w={isOpen ? "250px" : "60px"}
      bg={walterFedyBlue}
      transition="all 0.2s ease-in-out"
      overflowX="hidden"
    >
      <Box h="100%" w="100%" position="relative">
        {children &&
          typeof children === "function" &&
          children({ isOpen, onClose, onOpen, onToggle })}
        {/* {children} */}
        <IconButton
          aria-label="Menu-Toggle"
          icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          position="absolute"
          bottom={3}
          left="10px"
          w="40px"
          h="40px"
          bg="transparent"
          color="whiteAlpha.800"
          borderRadius="8px"
          _hover={{ bg: walterFedyRed }}
          onClick={onToggle}
        />
        <UserProfile
          position="absolute"
          bottom="60px"
          left="10px"
          bg="transparent"
          color="whiteAlpha.800"
          borderRadius="8px"
          AADUser={AADUser}
          groupData={groupData}
          imageData={imageData}
        />
      </Box>
    </Box>
  );
};
