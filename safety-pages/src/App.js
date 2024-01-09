import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppContext } from './components/context/AppContext';
import { firebase } from './components/Firebase';
import BiometricAuth from './components/services/BiometricAuth';
import ErrorBoundary from './components/common/ErrorBoundary';
import Register from './components/forms/Register';
import Login from './components/forms/Login';
import HomePage from './components/pages/HomePage';
import LostFoundChildForm from './components/forms/LostFoundChildForm';
import PromptPage from './components/pages/PromptPage';
import NotepadPage from './components/pages/NotepadPage'; 


function App() {
  return (
    <ErrorBoundary> {/* Wrap your entire application */}
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/notepad">Notepad</Link></li>
            <li><Link to="/prompt">Prompt Page</Link></li>
            <li><Link to="/report">Lost & Found Child Form</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/notepad" component={NotepadPage} />
          <Route path="/prompt" component={PromptPage} />
          <Route path="/report" component={LostFoundChildForm} />
        </Switch>
      </div>
    </Router>
    </ErrorBoundary>
  );
}

export default App;