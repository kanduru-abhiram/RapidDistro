import { useWallet } from "../WalletContext";

const Connect = (props) => {
  const { walletAddress, walletConnect, handleWalletConnect } = useWallet();

  return (
    <div className="flex flex-col">
      <div>
        <button
          onClick={handleWalletConnect}
          className="w-full text-left p-2 bg-blue-500 text-white rounded"
          >
            {walletConnect ? "Wallet Connected" : "Connect Wallet"}
          </button>
          </div>
            {walletAddress && (
              <div className="text-sm text-gray-700 dark:text-gray-300 p-2">
                Connected Wallet: {walletAddress.slice(0, 5) + "..." + walletAddress.slice(walletAddress.length - 4)}
              </div>
          )}
    </div>
  );
};

export default Connect;
