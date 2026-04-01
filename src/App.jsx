import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const productFetch = async () => {
  const res = await fetch("/productCard.json");
  return res.json();
};

function App() {
  const fetchPromise = productFetch();
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  const cartsCount = carts.length;

  return (
    <>
      <Navbar carts={carts} setCarts={setCarts}></Navbar>
      <Banner></Banner>
      <div>
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-extrabold"> Digital Tools</h1>
          <p className="text-[#627382] px-5">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="tabs justify-center items-center my-6">
          <input
            type="radio"
            name="my_tabs_1"
            onClick={() => setActiveTab("products")}
            className={`btn  ${activeTab === "products" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""} rounded-3xl w-40`}
            aria-label="Products"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            onClick={() => setActiveTab("carts")}
            className={`btn ${activeTab === "carts" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""} rounded-3xl w-40`}
            aria-label={`Carts (${cartsCount})`}
          />
        </div>
      </div>

      {activeTab === "products" && (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Products
            fetchPromise={fetchPromise}
            carts={carts}
            setCarts={setCarts}
          ></Products>
        </Suspense>
      )}

      {activeTab === "carts" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Pricing></Pricing>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Footer>

      </Footer>
    </>
  );
}

export default App;
