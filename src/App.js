import {
  BrowserRouter as Router, Routes, Route, Navigate,
  useLocation,
} from "react-router-dom";

import Userfront from "@userfront/react";

import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard';

const AppRoutes = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
}

function isLoggedIn() {
  return Userfront.tokens.accessToken;
}

function RequireAuth({ children }) {
  let location = useLocation();

  if (!isLoggedIn()) {
    return <Navigate to={AppRoutes.LOGIN} state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to={isLoggedIn() ? AppRoutes.DASHBOARD : AppRoutes.LOGIN} />} />
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route
          path={AppRoutes.DASHBOARD}
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
