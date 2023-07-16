import { Typography, Space, Layout } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Exchanges from "./Components/Exchanges";

import News from "./Components/News";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./App/store";
import Cryptocurrencies from "./Components/Cryptocurrencies";
import CryptoDetails from "./Components/CryptoDetails";
function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState<number>(0);
  const handleResize = () => setScreenSize(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex overflow-hidden">
      
        <Navbar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          screenSize={screenSize}
        />{" "}
      
      <div className={`${activeMenu ? "w-[calc(100%-300px)] ml-[300px]" :" w-full"}`}>
        <Provider store={store}>
          <Layout>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Layout>
        </Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
