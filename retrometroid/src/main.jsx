import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GBAPersonnaliser from './GBAPersonnaliser.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GBAPersonnaliser />
  </StrictMode>,
)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./front/App";
import "./front/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
