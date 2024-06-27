import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Usercard from "../components/Usercard";
import Usercards from "../components/Usercards";
import Paragraphcard from "../components/Paragraphcard";

function Home() {
  return (
    <>
    <div >
      <Navbar />
          
      <Banner />
      <Paragraphcard/>
      <Freebook />
      <Usercards/>
      <Usercard />
      
      <Footer />
      </div>
    </>
  );
}

export default Home;
