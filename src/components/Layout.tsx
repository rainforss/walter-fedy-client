import { User, Group } from "@microsoft/microsoft-graph-types-beta";
import React from "react";
import { NAV_ITEMS } from "../utils/constants";
import { Header } from "./Header";
import MenuControl from "./MenuControl";
import { NavMenu } from "./navigation-components/NavMenu";
import { Sidebar } from "./navigation-components/SideBar";

interface LayoutProps {
  AADUser?: User | undefined;
  groupData?: Group[] | undefined;
  imageData?: string;
  isOpen: boolean;
  isHidden: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  toggleHidden: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  AADUser,
  groupData,
  imageData,
  isOpen,
  isHidden,
  onOpen,
  onClose,
  onToggle,
  toggleHidden,
}) => {
  return (
    <>
      <Sidebar
        AADUser={AADUser}
        groupData={groupData}
        imageData={imageData}
        isOpen={isOpen}
        isHidden={isHidden}
        onOpen={onOpen}
        onClose={onClose}
        onToggle={onToggle}
        toggleHidden={toggleHidden}
      >
        {({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
          <NavMenu onClose={onClose} navItems={NAV_ITEMS} isOpen={isOpen} />
        )}
      </Sidebar>
      <Header isSidebarOpen={isOpen} isSidebarHidden={isHidden} />
      <MenuControl isSidebarHidden={isHidden} toggleSidebar={toggleHidden} />
    </>
  );
};
