import React, { useEffect, useState } from 'react'

const Checkout = ({ MyCart }) => {
  const [Total, setTotal] = useState(0)
  const [status, setStatus] = useState("") // order status

  useEffect(() => {
    const num = MyCart.reduce((acc, elem) => acc + Math.floor(elem.price * 88), 0)
    setTotal(num)
  }, [MyCart])

  const handleBuyNow = () => {
    setStatus("Placing order...")  // step 1
    setTimeout(() => {
      setStatus("Order Placed ✅") // step 2 after 2s
    }, 2000)
  }

  return (
    <div className="h-full w-full text-white p-5 flex flex-col items-center">
      {MyCart.length ? (
        <>
          <table className="w-full mt-2 border border-white">
            <thead>
              <tr>
                <th className="border border-white">Product</th>
                <th className="border border-white">Quantity</th>
                <th className="border border-white">Price</th>
              </tr>
            </thead>
            <tbody>
              {MyCart.map((elem, idx) => (
                <tr key={idx}>
                  <td className="border border-white px-1">{elem.title}</td>
                  <td className="border border-white px-1">1</td>
                  <td className="border border-white px-1">
                    {(elem.price * 88).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-white text-black font-bold flex justify-between px-3 py-2 mt-2 w-full">
            <h1>Total:</h1>
            <h1>{Total}</h1>
          </div>

          <button
            onClick={handleBuyNow}
            disabled={status === "Placing order..."}
            className={`w-1/4 text-black p-2 font-bold rounded-lg mt-10 
                       hover:scale-[1.03] cursor-pointer
                       disabled:opacity-50 disabled:cursor-not-allowed
                       ${status === "Order Placed ✅"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-amber-300 hover:bg-amber-400"}`}
          >
            {status ? (
              <p className="text-lg font-semibold text-balck">{status}</p>
            ) : (<p>Buy Now</p>)}
          </button>

          {/* Show status */}

        </>
      ) : (
        <div className='flex items-center justify-center md:text-xl'>
          <h1>Currently No items Added to Cart</h1>
        </div>
      )}
    </div>
  )
}

export default Checkout
