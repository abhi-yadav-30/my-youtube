import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("MUI: You have provided an out-of-range value")
  ) {
    return; // skip the warning
  }
  originalWarn(...args); // let others pass through
};


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);




