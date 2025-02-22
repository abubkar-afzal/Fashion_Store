import "@/styles/globals.css";
import Header from './components/Header.jsx'
import Footer from "./components/Footer.jsx";

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
