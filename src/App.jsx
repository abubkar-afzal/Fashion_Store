import React from "react";
import Page1 from "./components/page1.jsx"
import Header from './components/Header.jsx'
import Footer from "./components/Footer.jsx";

const App = ()=>{
  return(
    <>
    <div className="">
      <Header/>
      <Page1 />
      <Footer />
      </div>
      
    </>
  );
}
export default App;