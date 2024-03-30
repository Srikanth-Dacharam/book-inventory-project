import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBooks, setFilterBooks] = useState([]);
  // console.log(searchTerm);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=react&maxResults=40")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Check if the data.items property exists and is an array
        if (data.items && Array.isArray(data.items)) {
          setFilterBooks(data.items);
          setBooks(data.items);
          setLoading(false);
        } else {
          throw new Error("Invalid data format received from the API");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("(In use effect filter");
    const filteredList = books.filter((book) =>
      book.volumeInfo.title
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
    setFilterBooks(filteredList);
  }, [searchTerm]);

  useEffect(() => {
    const filteredList = books.filter((book) => {
      const titleMatch = book.volumeInfo.title
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
      const authorMatch = book.volumeInfo.authors
        ? book.volumeInfo.authors.some((author) =>
            author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
        : false;
      const categoryMatch = book.volumeInfo.categories
        ? book.volumeInfo.categories.some((category) =>
            category
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          )
        : false;
      return titleMatch || authorMatch || categoryMatch;
    });
    setFilterBooks(filteredList);
  }, [searchTerm, books]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="book-wrapper">
        <div className="pt-4 max-w-md border-rounded mx-auto ">
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            className="search-input w-full px-4 py-2 mx-2"
          />
        </div>
        <ul className="book-list-ul sm:pt-5 py-16 flex gap-5 flex-wrap justify-center m-2">
          {filterBooks.map((book) => (
            <li className="card shadow-md rounded-md p-2  h-50 md:grid-cols-2 md:items-center">
              <Link to={`/book/${book.id}`} key={book.id}>
                <div>
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                    className="h-40 p-6 md:grid-cols-2 md:items-center"
                  />
                </div>
                <div className="cursor-pointer">
                  <div className="text-bold p-1 flex">
                    <b className="sub-heads">Title:</b>
                    <span className="card-val">{book.volumeInfo.title}</span>
                  </div>
                  <div className="flex">
                    <b className="sub-heads"> Author:</b>
                    <span className="card-val">
                      {book.volumeInfo.authors &&
                        book.volumeInfo.authors.join(", ")}
                    </span>
                  </div>
                  <p className="flex">
                    <b className="sub-heads"> Genre:</b>{" "}
                    <span className="card-val">
                      {book.volumeInfo.categories &&
                        book.volumeInfo.categories.join(", ")}
                    </span>
                  </p>
                  <div className="flex">
                    <b className="sub-heads"> Price $ :</b>

                    {book.saleInfo && book.saleInfo.listPrice && (
                      <span className="card-val">
                        {book.saleInfo.listPrice.amount}{" "}
                        {book.saleInfo.listPrice.currencyCode}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
