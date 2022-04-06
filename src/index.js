import React from 'react';
import ReactDOM from 'react-dom';
import './styleSheets/index.css';
import Home from './components/Home';
import App from './components/App';
import ApplicantHome from './components/ApplicantHome';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applicant-home" element={<ApplicantHome />} />
        </Routes>
      </Router>

    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
