import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: "45f19279-13f5-4935-bd46-1a541c841e58",
    authority:
      "https://login.microsoftonline.com/0ec9a656-9268-4720-abb2-bab4029df654",
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
