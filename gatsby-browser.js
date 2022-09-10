import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { navigate } from "gatsby";
import history from "./src/utils/history";

export const wrapRootElement = ({ element }) => {
  // const onRedirectCallback = (appState) => {
  //   // Use Gatsby's navigate method to replace the url
  //   navigate(appState?.returnTo || "/", { replace: true });
  // };

  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };

  return (
    <div>
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        clientId={process.env.AUTH0_CLIENTID}
        redirectUri={window.location.origin + "/dashboard"}
        onRedirectCallback={onRedirectCallback}
      >
        {element}
      </Auth0Provider>
    </div>
  );
};
