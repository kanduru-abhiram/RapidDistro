import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletProvider } from "./WalletContext";
import Dashboard from "./components/Dashboard";
import SendAmount from "./components/SendAmount";
import Disperse from "./components/Disperse";
import SwapFields from "./components/SwapFields";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<h1 className="text-2xl">Welcome to the Dashboard</h1>} />
            <Route path="send" element={<SendAmount />} />
            <Route path="disperse" element={<Disperse />} />
            <Route path="swap" element={<SwapFields />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
