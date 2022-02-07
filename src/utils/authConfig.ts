import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: "3a5e0893-b08e-42f4-bd48-d587685ec238",
    authority:
      "https://login.microsoftonline.com/f73a1153-4de9-4008-861c-c39db89217b7",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read", "user.readbasic.all"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint:
    "https://graph.microsoft.com/v1.0/me?$select=displayName,userType,id,companyName,jobTitle,userPrincipalName",
  graphMeMemberEndpoint: "https://graph.microsoft.com/v1.0/me/memberOf",
  graphMePhotoEndpoint: "https://graph.microsoft.com/v1.0/me/photo/$value",
};
