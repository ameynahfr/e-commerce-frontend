import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Header/Navbar";
import Protected from "./Protected";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AdminPortal from "./pages/AdminPortal";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/me" element={<MyProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
