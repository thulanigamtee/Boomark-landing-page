// import { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Features from "./components/features/Features";
import Download from "./components/download/Download";
import Faq from "./components/faq/Faq";
import Outro from "./components/outro/Outro";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <Features />
        <Download />
        <Faq />
        <Outro />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
