import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TransferAmount from "./TransferAmount";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <TransferAmount />
    </div>
  );
};

export default Dashboard;
