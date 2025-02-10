import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/glogals.css";
import HomePage from "../pages/home/home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
