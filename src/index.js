import React from 'react';
import ReactDOM from 'react-dom';
import './styleSheets/index.css';
import Home from './components/Home';
import App from './components/App';
import ApplicantHome from './components/ApplicantHome';
import AppForm from './components/AppForm';
import AppStatus from './components/AppStatus';
import ProfileForm from "./components/ProfileForm";
import Contact from "./components/Contact";
import AdminHome from "./components/AdminHome";
import AddJob from './components/AddJob';
import JobPostings from "./components/JobPostings";
import ViewApps from "./components/ViewApps";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./components/store";
import Redirecting from './components/Redirecting';



const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <React.StrictMode>

    <MsalProvider instance={msalInstance}>
      
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redirecting" element={<Redirecting/>} />
          <Route path="/applicant-home" element={<ApplicantHome />} />
          <Route path="/application-form" element={<AppForm />} />
          <Route path="/application-status" element={<AppStatus />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/job-postings" element={<JobPostings/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/view-apps" element={<ViewApps/>}/>
          <Route path="/edit-jobs" element={<AddJob />} />
        </Routes>
      </Router>
      </Provider>

    </MsalProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
