import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextShare from "./context/ContextShare.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextShare>
        <GoogleOAuthProvider clientId="1060476276254-cgcj47bir3le12jueum4c76f5lnmul5r.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </ContextShare>
    </BrowserRouter>
  </StrictMode>
);
