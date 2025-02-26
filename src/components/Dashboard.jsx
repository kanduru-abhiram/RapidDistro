import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-64 w-full p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
