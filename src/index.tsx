import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import "styles/globals.css";
import Footer from "components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/home";
import LoginPage from "pages/login";
import NotFoundPage from "pages/not-found";
import ListNgoPage from "pages/ngo/announce/list"
import RegisterNgoPage from "pages/ngo/register"

const AppRoute = () => (
  <main>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registerngo" element={<RegisterNgoPage />} />
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="announce/list" element={<ListNgoPage />} />    
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </main>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppRoute />);
