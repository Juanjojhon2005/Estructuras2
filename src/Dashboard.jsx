import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.name}!</p>
      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
};

export default Dashboard;
