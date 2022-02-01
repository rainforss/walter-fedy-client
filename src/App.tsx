import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./pages/Main";
import {
  InteractionStatus,
  InteractionType,
  IPublicClientApplication,
} from "@azure/msal-browser";
import {
  MsalAuthenticationTemplate,
  MsalProvider,
  useMsal,
} from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/navigationClient";
import { Layout } from "./components/Layout";
import {
  callMsGraph,
  getMemberGroups,
  getUserProfilePic,
} from "./utils/msGraph";
import { User, Group } from "@microsoft/microsoft-graph-types-beta";
import { loginRequest } from "./utils/authConfig";

interface IAppProps {
  pca: IPublicClientApplication;
}

function App({ pca }: IAppProps) {
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);
  const authRequest = { ...loginRequest };

  return (
    <MsalProvider instance={pca}>
      <ChakraProvider resetCSS>
        <MsalAuthenticationTemplate
          interactionType={InteractionType.Redirect}
          authenticationRequest={authRequest}
        >
          <Pages />
        </MsalAuthenticationTemplate>
      </ChakraProvider>
    </MsalProvider>
  );
}

function Pages() {
  const { inProgress } = useMsal();
  const [graphData, setGraphData] = useState<User>();
  const [groupData, setGroupData] = useState<undefined | Group[]>(undefined);
  const [imageData, setImageData] = useState<undefined | string>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleHidden = () => {
    setIsHidden((prevState) => !prevState);
  };

  useEffect(() => {
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((res) => setGraphData(res))
        .catch((err) => console.log(err));
    }
  }, [inProgress, graphData]);
  useEffect(() => {
    if (!groupData && inProgress === InteractionStatus.None) {
      getMemberGroups()
        .then((res) => {
          setGroupData(res);
        })
        .catch((err) => console.log(err));
    }
  }, [inProgress, groupData]);
  useEffect(() => {
    if (!imageData && inProgress === InteractionStatus.None) {
      getUserProfilePic()
        .then((res) => {
          setImageData(res);
        })
        .catch((err) => console.log(err));
    }
  }, [inProgress, imageData]);

  return (
    <>
      <Layout
        AADUser={graphData}
        groupData={groupData}
        imageData={imageData}
        isOpen={isOpen}
        isHidden={isHidden}
        onOpen={onOpen}
        onClose={onClose}
        onToggle={onToggle}
        toggleHidden={toggleHidden}
      />
      <Switch>
        <Route path="/">
          <Main isSideBarOpen={isOpen} isSideBarHidden={isHidden} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
