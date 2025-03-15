import "@/styles/globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoadingBar from "react-top-loading-bar";

import { Provider, useDispatch } from "react-redux";
import { store, persistor } from "./components/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";
import Head from "next/head.js";
import { useRouter } from "next/router.js";
import { BarLoader } from "react-spinners";
import { Fade } from "react-awesome-reveal";
const jwt = require("jsonwebtoken");
export default function App({ Component, pageProps }) {
 
  const [progress, setProgress] = useState(0);
  const [loader, setLoader] = useState(true);
  const [tokenData, setTokenData] = useState("");
  const router = useRouter();
  const [cancel, setCancel] = useState(true);
  const [cart, setCart] = useState(false);
  const [authtoken, setauthtoken] = useState(false);
  const showCancel = () => {
    setCancel(!cancel);
  };
  const showCart = () => {
    setCart(!cart)
  }
  useEffect(() => {
    
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeStart", () => {
      setLoader(true);
      
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      
    });

    router.events.on("routeChangeComplete", () => {
      setLoader(false);
    });
    let token =localStorage.getItem("Fashion_Store") 
    if(token){
      
      setauthtoken(true)
    }
    setLoader(false);
    setCart(false)
  }, [router.events, router.query])
  console.log(tokenData)
  return (
    <>
      <Head>
        <meta name="keywords" content="Fashion Store" />
        <meta
          name="description"
          content="This An Fashion Store Where You Can Find Every Type Of Fashion."
        />
        <meta name="author" content="Abubakar Afzal" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:title" content="It's A Fahion Store"></meta>
        <meta
          property="og:description"
          content="Choice Is Your Work Is Our 🥰"
        ></meta>

        <meta name="theme-color" content="#1bb566" />
       
        <title> Fashion Store</title>
      </Head>
      <LoadingBar
        color="rgb(78, 51, 26)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="fixed z-20 top-0 bg-[---c3] xsm:pb-[0.5rem] sm:pb-[1rem] shadow-md">
            <Header  cart={cart} cancel={cancel} showCancel={showCancel} showCart={showCart} authtoken={authtoken}/></div>
            <div className="xsm:mt-[1.5rem] sm:mt-[7rem] "></div>
            {loader ? (
        <Fade>
          <div className=" mx-auto mt-[45vh] mb-[50vh] justify-items-center">
          <BarLoader 
          height={4}
          width={100}
          color={"rgb(243, 165, 129)"}
          speedMultiplier={1} />
            <br />
            <br />
            <p className="font-bold sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
              Please Wait !!
            </p>
          </div>
        </Fade>) :
            <Component {...pageProps} showCart={showCart}/>
            }
            <Footer />
          
        </PersistGate>
      </Provider>
    </>
  );
}
