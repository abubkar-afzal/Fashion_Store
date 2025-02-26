import "@/styles/globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="">
            <Header />
            <div className="xsm:mt-[0.5rem] sm:mt-[1rem] "></div>

            <Component {...pageProps} />

            <Footer />
          </div>
        </PersistGate>
      </Provider> 
    </>
  );
}
