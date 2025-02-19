import "@/styles/globals.css";
import Header from './components/Header.jsx'
import Footer from "./components/Footer.jsx";
import Home from "./index.js";

export default function App({ Component, pageProps }) {
  return(
  <>
  <div className="">
    <Header/>
    <div className="xsm:mt-[0.5rem] sm:mt-[1rem] "></div>
    <Component {...pageProps} />
    <Footer />
    </div>
    
  </>
)}
