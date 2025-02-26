import { createContext, useState, useContext } from "react";
import { BrowserProvider, formatEther } from "ethers";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletConnect, setWalletConnect] = useState(false);
  const [walletBalance, setWalletBalance] = useState(null);

  const handleWalletConnect = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install it to connect your wallet.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length === 0) {
        alert("No accounts found. Please ensure your wallet is unlocked.");
        return;
      }

      setWalletAddress(accounts[0]);
      setWalletConnect(true);
      const provider = new BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(accounts[0]);

      setWalletBalance(formatEther(balance));
      console.log("Wallet Balance:", formatEther(balance));
      console.log("Connected Wallet:", accounts[0]);
    } catch (error) {
      if (error.code === 4001) {
        alert("Wallet connection request denied. Please try again.");
      } else {
        console.error("Wallet connection error:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        walletConnect,
        walletBalance,
        handleWalletConnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
