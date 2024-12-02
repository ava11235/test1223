/**
 * Entry point for the React application with AWS Amplify integration
 * 
 * This file sets up the React application and configures AWS Amplify.
 * 
 * Amplify-specific elements:
 * 
 * 1. Imports:
 *    - import { Amplify } from "aws-amplify"
 *      Core Amplify library for configuration
 *    - import outputs from "../amplify_outputs.json"
 *      Imports Amplify backend configuration
 *    - import { generateClient } from "aws-amplify/api"
 *      Utility for generating API clients (though not used in this file)
 *    - import '@aws-amplify/ui-react/styles.css'
 *      Imports default styles for Amplify UI components
 *    - import { ThemeProvider } from '@aws-amplify/ui-react'
 *      Amplify's theme provider for consistent styling
 * 
 * 2. Amplify Configuration:
 *    Amplify.configure(outputs)
 *    This line configures Amplify with the settings from amplify_outputs.json,
 *    which typically includes endpoints, region, and other backend details.
 * 
 * 3. Amplify UI Integration:
 *    <ThemeProvider>
 *      Wraps the App component, providing Amplify's theming capabilities
 *      to all Amplify UI components used in the application.
 * 
 * This setup ensures that Amplify is properly configured and its UI components
 * are available throughout the React application. The Amplify configuration
 * connects the frontend to the AWS backend services set up through Amplify CLI.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// Amplify imports 
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json"
import { generateClient } from "aws-amplify/api";
// Amplify CSS
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';

// Custom styles
import "./index.css";

// Amplify configure 
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
