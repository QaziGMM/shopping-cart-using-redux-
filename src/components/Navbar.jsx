import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <nav className="flex align-center justify-around text-center text-white bg-slate-800 py-10">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="flex gap-4 text-xl semibold ">
        <Link className="hover:text-amber-400" to="/">
          Home
        </Link>

        <Link className="hover:text-amber-400" to="/cart">
          cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
Navbar;
