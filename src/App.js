// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";
import CheckoutForm from "./pages/CheckoutForm";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="book/:id" element={<BookPage />} />
        <Route path="CartPage" element={<CartPage />} />
        <Route path="CheckoutForm" element={<CheckoutForm />} />
      </Routes>
    </div>
  );
}

export default App;
