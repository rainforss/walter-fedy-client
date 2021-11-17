import { Flex } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router";
import { NavMenuButton } from "./NavMenuButton";
import { NavItem } from "../../utils/types";

interface NavMenuProps {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  navItems,
  isOpen,
  onClose,
}) => {
  const history = useHistory();
  return (
    <Flex
      position="absolute"
      top={2}
      direction="column"
      w={isOpen ? "230px" : "40px"}
      left={"10px"}
    >
      {navItems.map((n) => (
        <NavMenuButton
          key={n.text}
          navItem={n}
          onClick={() => {
            if (!n.url.includes("https")) {
              history.push(n.url);
            }
          }}
        />
      ))}
    </Flex>
  );
};
