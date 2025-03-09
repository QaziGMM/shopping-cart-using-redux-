import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/shopingCart/productSlice";
import { addtoCart } from "../feature/shopingCart/cartSlice";

function ProductList() {
  const { items: products, status } = useSelector((state) => state.products);
  useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  if (status === "loading") return <p>Loading Product ...</p>;
  if (status === "failed")
    return <p>Failed to load product. Please try again </p>;

  return (
    <>
      <Navbar />
      <div>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1    place-items-center mt-28 ">
          {products.map((product) => (
            <div
              className="shadow-xl mt-10 rounded-lg flex-col flex items-center justify-between  p-10 max-w-96 h-[700px]"
              key={product.id}
            >
              <img className="max-w-80 max-h-96 " src={product.image} alt="" />
              <h2 className="text-2xl font-bold">
                {product.title.length > 20
                  ? `${product.title.slice(0, 20)}...`
                  : product.title}
              </h2>
              <p className="text-2xl font-bold">Price: ${product.price}</p>
              <button
                onClick={() => dispatch(addtoCart(product))}
                className="bg-amber-500 px-10 py-4 rounded-lg text-white font-bold"
              >
                {" "}
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
