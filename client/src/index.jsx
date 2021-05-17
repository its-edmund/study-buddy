import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import "focus-visible/dist/focus-visible";

import App from "./components/App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ublmmtbp.us.auth0.com"
    clientId="sqLNk0JuR1nSyad42MJ2Da9pk4ONnbFl"
    redirectUri={window.location.origin}
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
