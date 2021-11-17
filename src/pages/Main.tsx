import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { Box } from "@chakra-ui/layout";
import * as React from "react";
import ProjectCard from "../components/ProjectCard";
import { loginRequest } from "../utils/authConfig";
import { projects } from "../utils/constants";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  const authRequest = { ...loginRequest };
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
    >
      <Box>
        {projects.map((p) => (
          <ProjectCard
            key={p.projectNumber}
            projectName={p.projectName}
            projectNumber={p.projectNumber}
          />
        ))}
      </Box>
    </MsalAuthenticationTemplate>
  );
};

export default Main;
