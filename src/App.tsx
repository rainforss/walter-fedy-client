import React from "react";
import {
  Route,
  Switch,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./pages/Main";
import { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/navigationClient";

interface IAppProps {
  pca: IPublicClientApplication;
}

function App({ pca }: IAppProps) {
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  // useEffect(() => {
  //   const fetchAPI = async (url: string) => {
  //     const account = pca.getActiveAccount();

  //     try {
  //       if (!account) {
  //         toast({
  //           description:
  //             "No active account! Verify a user has been signed in and setActiveAccount has been called.",
  //           status: "error",
  //         });
  //         throw Error("No Active Account");
  //       }
  //       const tokenResponse = await pca.acquireTokenSilent({
  //         ...loginRequest,
  //         account,
  //       });
  //       console.log(tokenResponse);
  //       await fetch(url, {
  //         headers: { "Content-Type": "application/json" },
  //         method: "POST",
  //         body: JSON.stringify({ accessToken: tokenResponse.accessToken }),
  //       });
  //     } catch (error: any) {
  //       if (error.message === "No Active Account" && !account) {
  //         return pca.acquireTokenRedirect({ ...loginRequest });
  //       }
  //       if (error instanceof InteractionRequiredAuthError) {
  //         return pca.acquireTokenPopup({
  //           ...loginRequest,
  //           account: account || undefined,
  //         });
  //       }
  //     }
  //   };
  //   fetchAPI("localhost:5000/accessToken");
  // }, [pca, toast]);

  return (
    <Router>
      <MsalProvider instance={pca}>
        <ChakraProvider resetCSS>
          <Pages />
        </ChakraProvider>
      </MsalProvider>
    </Router>
  );
}

function Pages() {
  return (
    <Switch>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
