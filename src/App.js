import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AlertDialougue from "./components/AlertDialogue";
import { AlertProvider } from "./contexts/AlertContext";

function App() {
  return (
    <AlertProvider>
      <div className="App">
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </Layout>
        <Footer />
        <AlertDialougue />
      </div>
    </AlertProvider>
  );
}

export default App;
