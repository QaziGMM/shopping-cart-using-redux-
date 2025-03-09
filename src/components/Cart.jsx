import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removefromCart } from "../feature/shopingCart/cartSlice";

function Cart() {
  const {
    items: cartItems,
    tempitems,
    totalPrice,
  } = useSelector((state) => state.cart);
  useDispatch();
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleRemoveItem = (id) => {
    dispath(removefromCart(id));
  };
  return (
    <>
      <div className="flex  items-center justify-center  h-screen">
        <div className="shadow-lg p-20 max-w-[900px]  ">
          <div className="flex  flex-col justify-between  ">
            <h2 className="text-4xl font-bold">Your Cart</h2>
            <div>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div className="mt-20" key={item.id}>
                    <img
                      className="h-28 w-28"
                      src={item.image}
                      alt={item.title}
                    />
                    <div>
                      <h3 className="text-3xl font-bold">{item.title}</h3>
                      <p className="text-2xl">
                        Price: ${item.price.toFixed(2)}
                      </p>
                      <div className="flex gap-10">
                        <input className="border-2" type="number" min="1" />
                        <button className="bg-amber-500 px-10 py-4 rounded-lg text-white font-bold">
                          Update
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="bg-amber-500 px-10 py-4 rounded-lg text-white font-bold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end text-2xl font-bold">
                      <p>Total: ${totalPrice.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => navigate("/")}
                      className="bg-amber-500 px-10 py-4 w-full rounded-lg text-white font-bold"
                    >
                      Back to Shoping{" "}
                    </button>
                  </div>
                ))
              ) : (
                <p>Cart is empty</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
