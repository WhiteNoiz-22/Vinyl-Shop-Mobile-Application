import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min";

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
