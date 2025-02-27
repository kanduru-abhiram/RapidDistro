import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletProvider } from "./WalletContext";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
