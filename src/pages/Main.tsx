import { Box } from "@chakra-ui/layout";
import * as React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/constants";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <Box>
      {projects.map((p) => (
        <ProjectCard
          key={p.projectNumber}
          projectName={p.projectName}
          projectNumber={p.projectNumber}
        />
      ))}
    </Box>
  );
};

export default Main;
