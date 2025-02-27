import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletProvider } from "./WalletContext";
import Dashboard from "./components/Dashboard";
import SendAmount from "./components/SendAmount";
import Disperse from "./components/Disperse";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<h1 className="text-2xl">Welcome to the Dashboard</h1>} />
            <Route path="disperse" element={<Disperse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
