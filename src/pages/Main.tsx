import { Box } from "@chakra-ui/layout";
import * as React from "react";
import ProjectCard from "../components/ProjectCard";
import { PageWrapper } from "../components/ui-components/PageWrapper";
import { projects } from "../utils/constants";

interface IMainProps {
  isSideBarOpen: boolean;
}

const Main: React.FunctionComponent<IMainProps> = ({ isSideBarOpen }) => {
  return (
    <PageWrapper isSidebarOpen={isSideBarOpen}>
      <Box>
        {projects.map((p) => (
          <ProjectCard
            key={p.projectNumber}
            projectName={p.projectName}
            projectNumber={p.projectNumber}
          />
        ))}
      </Box>
    </PageWrapper>
  );
};

export default Main;
