import "@/styles/globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";
import Head from "next/head.js";
import { useRouter } from "next/router.js";
export default function App({ Component, pageProps }) {
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
    if(localStorage.getItem("Fashion_Store")){
      setauthtoken(true)
    }
  }, [router.query])
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="fixed z-20 top-0 bg-[---c3] xsm:pb-[0.5rem] sm:pb-[1rem] shadow-md">
            <Header  cart={cart} cancel={cancel} showCancel={showCancel} showCart={showCart} authtoken={authtoken}/></div>
            <div className="xsm:mt-[1.5rem] sm:mt-[7rem] "></div>

            <Component {...pageProps} showCart={showCart}/>

            <Footer />
          
        </PersistGate>
      </Provider>
    </>
  );
}
