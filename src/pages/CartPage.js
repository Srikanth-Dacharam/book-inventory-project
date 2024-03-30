// CartPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../components/CartSlice";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Header from "../components/Header";

function CartPage() {
  const selectedBook = useSelector((state) => state.cart);
  console.log(selectedBook);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (book) => {
    dispatch(removeFromCart(book));
  };

  const handleDecreseCart = (book) => {
    dispatch(decreaseCart(book));
  };

  const handleIncreaseCart = (book) => {
    dispatch(addToCart(book));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleChechOut = () => {
    // dispatch(Checkout(book));
    navigate("/CheckoutForm");
  };

  const totalCartAmount = selectedBook.cartItems.reduce((total, book) => {
    return total + (book.saleInfo?.listPrice?.amount || 0) * book.cartQuantity;
  }, 0);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="max-w-7xl mx-auto mt-5">
        <h2 className="text-center color-black solid-black text-2xl font-bold">
          Your Book List
        </h2>
        {selectedBook.cartItems.length === 0 ? (
          <div className="flex justify-between  rounded-md">
            <p className="rounded-50% shadow-md">Your cart is empty</p>
            <Link to="/HomePage">
              <span className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Go To Shaping{" "}
              </span>
            </Link>
          </div>
        ) : (
          <div className="mx-10">
            <div className="cart-item-mq mt-5 h-[450px] mb-2 overflow-x-auto rounded-md">
              {selectedBook.cartItems.map((book) => (
                <div
                  key={book.id}
                  className="border flex p-2 justify-between items-center mt-5 shadow-md rounded-md"
                >
                  <div className="px-2">
                    <img
                      src={book.volumeInfo?.imageLinks?.thumbnail}
                      alt={book.volumeInfo?.title}
                      className="h-40 p-6"
                    />
                  </div>
                  <h1 className="px-2 max-w-[15ch]">
                    <b>Title:</b> {book.volumeInfo?.title}
                  </h1>
                  <h2 className="px-2">
                    <b> Price $ :</b>

                    {book.saleInfo && book.saleInfo.listPrice && (
                      <div>
                        {book.saleInfo.listPrice.amount}{" "}
                        {book.saleInfo.listPrice.currencyCode}
                      </div>
                    )}
                  </h2>
                  <p className="px-2">
                    <b>Quantity : </b>
                    <button
                      onClick={() => handleDecreseCart(book)}
                      className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-blue-600"
                    >
                      -
                    </button>
                    &nbsp;
                    {book.cartQuantity}
                    &nbsp;
                    <button
                      onClick={() => handleIncreaseCart(book)}
                      className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-blue-600"
                    >
                      +
                    </button>
                  </p>

                  <div className="">
                    Total Price $
                    {book.saleInfo && book.saleInfo.listPrice && (
                      <div>
                        {book.saleInfo.listPrice.amount * book.cartQuantity}{" "}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleRemoveFromCart(book)}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-8 mb-4">
              <button
                onClick={() => handleClearCart()}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-blue-600 shadow-md "
              >
                Clear Total cart
              </button>

              <button
                onClick={() => handleChechOut()}
                className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-blue-600"
              >
                Check out
              </button>

              <div className="">
                Total Cart Amount: ${totalCartAmount.toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
