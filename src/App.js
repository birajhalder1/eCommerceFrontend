import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import MainRoute from "./components/common/MainRoute";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <MainRoute />
      </main>
      <Footer />
    </div>
  );
}
