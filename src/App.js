import {
  BrowserRouter as Router, Routes, Route, Navigate,
  useLocation,
} from "react-router-dom";

import Userfront from "@userfront/react";

import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard';

function RequireAuth({ children }) {
  let location = useLocation();

  if (!Userfront.tokens.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
