import { useState } from "react";

const Disperse = () => {
  const [token, setToken] = useState("");
  const [receivers, setReceivers] = useState([{ address: "", amount: "" }]);

  const handleAddReceiver = () => {
    setReceivers([...receivers, { address: "", amount: "" }]);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newReceivers = [...receivers];
    newReceivers[index][name] = value;
    setReceivers(newReceivers);
  };

  const handleDeleteReceiver = (index) => {
    setReceivers(receivers.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Disperse Tokens</h2>
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-600">Token Address</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter token address"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {receivers.map((receiver, index) => (
          <div key={index} className="flex items-center gap-3">
            <input
              type="text"
              name="address"
              placeholder="Receiver Address"
              value={receiver.address}
              onChange={(e) => handleChange(e, index)}
              className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={receiver.amount}
              onChange={(e) => handleChange(e, index)}
              className="w-24 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {receivers.length > 1 && (
              <button
                onClick={() => handleDeleteReceiver(index)}
                className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleAddReceiver}
        className="mt-4 w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        + Add Receiver
      </button>
    </div>
  );
};

export default Disperse;
