import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { walterFedyDarkBlue } from "../utils/constants";
import { parsePageTitle } from "../utils/parsePageTitle";

interface HeaderProps {
  isSidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isSidebarOpen }) => {
  const location = useLocation();

  return (
    <Flex
      w={isSidebarOpen ? "calc(100% - 250px)" : "calc(100% - 60px)"}
      justify="space-between"
      align="center"
      px={8}
      position="fixed"
      zIndex="2"
      top="0"
      borderBottom="3px solid #E2E8F0"
      left={isSidebarOpen ? "250px" : "60px"}
      bg="white"
      transition="all 0.2s ease-in-out"
      h="10vh"
    >
      <Heading as="h2" color={walterFedyDarkBlue}>
        {parsePageTitle(location.pathname)}
      </Heading>
      <Image
        src="/WF_Logo.jpg"
        w={{ base: "100px", sm: "200px", md: "300px" }}
        objectFit="contain"
      />
    </Flex>
  );
};
