import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface PageWrapperProps {
  children: ReactElement;
  isSidebarOpen: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  isSidebarOpen,
  children,
}) => {
  return (
    <Box
      w={isSidebarOpen ? "calc(100% - 250px)" : "calc(100% - 60px)"}
      position="absolute"
      left={isSidebarOpen ? "250px" : "60px"}
      top="10vh"
      transition="all 0.2s ease-in-out"
      padding={8}
      minHeight="90vh"
      overflowY="hidden"
      overflowX="scroll"
    >
      {children}
    </Box>
  );
};
