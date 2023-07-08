import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  // calculate item
  const totalPrice = () => {
    // price starts at 0
    let total = 0;
    // iterate through products and increase the total num by quantity and item price
    products.forEach((item) => (total += item.quantity * item.price));
    // only allow 2 numbers after decimal
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NLZz9EETxKSOWCWNioTYv0Tn4la1y3o8b8HklA6BvYgMn34AynqsFatekXB1AqCt3lZGChGXvuKHmgqdz88drmt00oue7HDhS"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart absolute right-5 top-20 z-50 bg-white p-5 shadow-lg">
      <h2 className="mb-7 text-gray-400 text-xl">Products in cart</h2>
      {products?.map((item) => (
        <div className="item flex gap-5 mb-5 items-center" key={item.id}>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt=""
            className="w-20 h-[100px] object-cover"
          />
          <div className="details">
            <h2 className="mb-4 text-gray-400 text-lg capitalize">
              {item.title}
            </h2>
            <p className="text-sm mb-2.5">{item.desc.substring(0, 50)}</p>
            <div className="price font-semibold">
              {item.quantity} x ${item.price.toFixed(2)}
            </div>
          </div>
          <DeleteIcon
            className="text-red-500 cursor-pointer"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total flex justify-between font-bold">
        <span className="mb-5">SUBTOTAL</span>
        <span className="">${totalPrice()}</span>
      </div>
      <button
        className="flex bg-gray-200 py-2 px-8 rounded-sm shadow-md mb-5 text-sm font-semibold"
        onClick={handlePayment}
      >
        PROCEED TO CHECKOUT
      </button>
      <span
        className="reset text-red-500 text-sm cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
