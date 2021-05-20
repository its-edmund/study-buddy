import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import "focus-visible/dist/focus-visible";
import ReactGA from "react-ga";

import App from "./components/App";

ReactGA.initialize("UA-66204325-2");
ReactGA.pageview(window.location.pathname + window.location.search);

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
