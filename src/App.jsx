import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import FirstApp from "./FirstApp";
import Challenge from "./Challenge";
import Father from "./Father";

function App() {
  return (
    <AuthProvider>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
        <br />
        <Link to="/Challenge">Challenge</Link> | <Link to="/Father">Father</Link> | <Link to="/FirstApp">FirstApp</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/Challenge" element={<Challenge />} />
        <Route path="/FirstApp" element={<FirstApp />} />
        <Route path="/Father" element={<Father />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
