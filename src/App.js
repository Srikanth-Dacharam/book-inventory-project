// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";
import CheckoutForm from "./pages/CheckoutForm";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route index element={<Login />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Header" element={<Header />} />

        <Route path="book/:id" element={<BookPage />} />
        <Route path="CartPage" element={<CartPage />} />
        <Route path="CheckoutForm" element={<CheckoutForm />} />
      </Routes>
    </div>
  );
}

export default App;
