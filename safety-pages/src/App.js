import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { AppContext } from "./context/AppContext"
import { auth, analytics, database } from "./services/firebase/FirebaseConfig"
import { appCheck } from "./services/firebase/AppCheck"
import ErrorBoundary from "./components/common/ErrorBoundary"
import HomePage from "./components/pages/HomePage"
import Login from "./components/forms/Login"
import LostFoundChildForm from "./components/forms/LostFoundChildForm"
import NotepadPage from "./components/pages/NotepadPage"
import ParentIsLostForm from "./components/forms/ParentIsLostForm"
import PromptPage from "./components/pages/PromptPage"
import Register from "./components/forms/Register"
import "./App.css"

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app-container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/notepad">Notepad</Link>
              </li>
              <li>
                <Link to="/prompt">Prompt Page</Link>
              </li>
              <li>
                <Link to="/report-child">Lost & Found Child Form</Link>
              </li>
              <li>
                <Link to="/report-parent">Lost & Found Parent Form</Link>
              </li>
            </ul>
          </nav>
          <div className="content-area">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/notepad" element={<NotepadPage />} />
              <Route path="/prompt" element={<PromptPage />} />
              <Route path="/report-child" element={<LostFoundChildForm />} />
              <Route path="/report-parent" element={<ParentIsLostForm />} />
            </Routes>
          </div>

          <div className="notepad-panel">
            <NotepadPage />
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App