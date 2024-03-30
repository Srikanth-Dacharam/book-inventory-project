import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../components/CartSlice";
import { Homepage } from "../pages/HomePage";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../components/Header";

// import CartPage from "./CartPage";

function BookPage() {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookData();
  }, [id]);

  const fetchBookData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await response.json();
      setBookData(data);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  if (!bookData) {
    return <div>Loading...</div>;
  }

  const { volumeInfo, saleInfo } = bookData;
  const title = volumeInfo.title;
  const author = volumeInfo.authors
    ? volumeInfo.authors.join(", ")
    : "Unknown Author";
  const genre = volumeInfo.categories
    ? volumeInfo.categories.join(", ")
    : "Unknown Genre";
  const amount =
    saleInfo.saleability === "FOR_SALE"
      ? saleInfo.listPrice.amount
      : "Not for sale";
  const image = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "";

  const description = volumeInfo.description
    ? { __html: volumeInfo.description }
    : "No Description";

  const handleAddtocart = (book) => {
    dispatch(addToCart(book));
    toast("Item Added to Cart !!!");
    navigate("/CartPage");
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="items-center justify max-w-7xl mx-auto mt-10 bg-opacity-10">
        <div>
          <img src={image} alt="Book cover" />
        </div>

        <div className="mt-5 p-4 rounded-md shadow-2xl ">
          <h1>
            <b>Title:</b>
            {title}
          </h1>
          <p>
            <b>Author(s):</b> {author}
          </p>
          <p>
            <b>Genre:</b> {genre}
          </p>
          <p>
            <b>Price $:</b> {amount}
          </p>
          <span>
            <b>Description :</b>{" "}
            <span dangerouslySetInnerHTML={description}></span>
          </span>
          <button
            onClick={() => handleAddtocart(bookData)}
            className="add-cart-btn m-4 bg-teal-500 rounded-md shadow-md px-4 py-2 hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (state) => {
  return {
    addToCart: state.addToCart,
  };
};

// export default connect(null, mapDispatchToProps)(BookPage);

export default BookPage;
