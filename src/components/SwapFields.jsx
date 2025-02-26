import { useState } from "react"
const SwapFields = () => {
    const [swap, setSwap] = useState(false)
    const [token1, setToken1] = useState("");
    const [token2, setToken2] = useState("");

    const Select1 = () => {
        return (
            <>
                <input
                    className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.01"
                    type="number"
                    value={token1}
                    onChange={(e) => setToken1(e.target.value)}
                />
            </>
        )
    }
    const Select2 = () => {
        return (
            <>
                <input
                    className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.02"
                    type="number"
                    value={token2}
                    onChange={(e) => setToken2(e.target.value)}
                />
            </>
        )
    }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Crosschain Swap</h3>
        {swap ? <div className="flex flex-col bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto"><Select1 /><Select2 /></div> : <div className="flex flex-col bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto"><Select2 /><Select1 /></div>}
        <button
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            onClick={() => setSwap(!swap)}
        >
            Swap
      </button>
    </div>
  )
}

export default SwapFields
