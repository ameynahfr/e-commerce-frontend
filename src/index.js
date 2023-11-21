import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { configureStore } from "@reduxjs/toolkit";
//import { Provider } from "react-redux";
import { AuthProvider } from "./AuthContext";
// const store = configureStore({
//   reducer: {
//     //user:
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
