import { Box, Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import * as React from "react";
import ProjectCard from "../components/ProjectCard";
import { PageWrapper } from "../components/ui-components/PageWrapper";
import { useProjects } from "../hooks/useProjects";

interface IMainProps {
  isSideBarOpen: boolean;
  isSideBarHidden: boolean;
}

const Main: React.FunctionComponent<IMainProps> = React.memo(
  ({ isSideBarOpen, isSideBarHidden }) => {
    const { projects, isError, isLoading } = useProjects(5, 0, true);

    return (
      <PageWrapper
        isSidebarOpen={isSideBarOpen}
        isSidebarHidden={isSideBarHidden}
      >
        <Box>
          {isLoading ? (
            <Center height="60vh">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          ) : null}
          {projects
            ? projects.map((p: any) => (
                <ProjectCard key={p.projectNumber} project={p} />
              ))
            : null}
        </Box>
      </PageWrapper>
    );
  }
);

export default Main;
