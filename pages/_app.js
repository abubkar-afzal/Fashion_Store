import "@/styles/globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [cancel, setCancel] = useState(true);
  const [cart, setCart] = useState(false);
  const showCancel = () => {
    setCancel(!cancel);
  };
  const showCart = () => {
    setCart(!cart)
  }
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="fixed z-20 top-0 bg-[---c3] xsm:pb-[0.5rem] sm:pb-[1rem] shadow-md">
            <Header  cart={cart} cancel={cancel} showCancel={showCancel} showCart={showCart}/></div>
            <div className="xsm:mt-[1.5rem] sm:mt-[3rem] "></div>

            <Component {...pageProps} showCart={showCart}/>

            <Footer />
          
        </PersistGate>
      </Provider>
    </>
  );
}
