import { useState } from "react";

const SendAmount = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    if (!recipient || !amount) {
      alert("Please enter a valid recipient address and amount.");
      return;
    }
    console.log(`Sending ${amount} ETH to ${recipient}`);
  };

  return (
    <div className="flex flex-col bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Send ETH</h2>
      <div className="relative w-full mb-4">
        <label className="text-sm font-medium text-gray-600">Recipient Address</label>
        <input
          className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0x..."
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className="relative w-full mb-4">
        <label className="text-sm font-medium text-gray-600">Amount (ETH)</label>
        <input
          className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0.01"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        onClick={handleSend}
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
      >
        Send ETH
      </button>
    </div>
  );
};

export default SendAmount;
