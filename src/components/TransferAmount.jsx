import { useState } from "react";

const TransferAmount = () => {
  const [token, setToken] = useState("");
  const [receivers, setReceivers] = useState([{ address: "", amount: "" }]);

  const handleAddReceiver = () => {
    // if (amount < 0) then alert("Amount can't be negative.");
    setReceivers([...receivers, { address: "", amount: "" }]);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newReceivers = [...receivers];

    if (name === "amount" && parseFloat(value) < 0) {
      newReceivers[index][name] = 0;
    } else {
      newReceivers[index][name] = value;
    }

    setReceivers(newReceivers);
  };

  // const handleChange = (event, index) => {
  //   const { name, value } = event.target;
  //   const newReceivers = [...receivers];
  //   newReceivers[index][name] = value;
  //   setReceivers(newReceivers);
  // };

  const handleDeleteReceiver = (index) => {
    setReceivers(receivers.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
  <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 sm:p-8">
    {/* Title */}
    {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🚀 RapidDistro</h2> */}
    <div className="flex justify-center">
      <img src="./RapidDistro-logo.png" className="text-2xl font-bold text-gray-800 mb-6" width={150}/>
    </div>
    
    {/* Token Address Input */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-600 mb-2">Token Address</label>
      <input
        type="text"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter token address"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
    </div>

    {/* Receivers List */}
    <div className="space-y-4">
      {receivers.map((receiver, index) => (
        <div key={index} className="flex flex-wrap gap-3 items-center">
          {/* Address Input */}
          <input
            type="text"
            name="address"
            placeholder="Receiver Address"
            value={receiver.address}
            onChange={(e) => handleChange(e, index)}
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Amount Input */}
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={receiver.amount}
            onChange={(e) => handleChange(e, index)}
            className="w-24 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Delete Button */}
          {receivers.length > 1 && (
            <button
              onClick={() => handleDeleteReceiver(index)}
              className="p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition shadow-sm"
            >
              ✕
            </button>
          )}
        </div>
      ))}
    </div>

    {/* Add Receiver Button */}
    <button
      onClick={handleAddReceiver}
      className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold shadow-md"
    >
      + Add Receiver
    </button>
  </div>
</div>

  );
};

export default TransferAmount;
