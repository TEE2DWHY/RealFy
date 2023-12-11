import { useEffect, useState } from "react";
import { Location } from "../assets/icons/icons";
import Navbar from "../components/Navbar";

const Home = () => {
  const [premiumProduct, setPremiumProduct] = useState(0);
  const [customerStats, SetCustomerStats] = useState(8);
  const [awardStats, setAwardStats] = useState(14);

  useEffect(() => {
    const productInterval = setInterval(() => {
      setPremiumProduct((prevProduct) => {
        if (prevProduct < 9) {
          return prevProduct + 1;
        } else {
          clearInterval(productInterval);
          return prevProduct;
        }
      });
    }, 500);

    return () => clearInterval(productInterval);
  }, []);

  useEffect(() => {
    SetCustomerStats(customerStats + 2);
    setAwardStats(awardStats + 5);
  }, [premiumProduct]);

  return (
    <div className="bg-bg-intro">
      {/* Navbar */}
      <Navbar currentRoute={window.location.pathname} />
      {/* Hero Section */}
      <section className="text-white px-16 pt-20 pb-20" id="hero-section">
        <div className="flex items-center justify-between" data-aos="fade-in">
          <div>
            <h1 className="uppercase w-2/4 text-5xl leading-normal">
              Discover Most Suitable Property.
            </h1>
            <p className="w-2/4 my-3 opacity-90">
              Find a variety of properties that suit your taste.
            </p>
            <Location />
            <input
              placeholder="Search by location..."
              type="text"
              className="py-4 px-12 rounded-lg w-5/12 border-2 border-gray-400 my-5 text-black"
            />
            <button className="bg-blue-600 py-2 px-6 -ml-28 rounded-md text-sm">
              Search
            </button>
            <ul className="flex items-center justify-between w-2/5 my-3">
              <li className="text-4xl">
                {premiumProduct}K <sup className="text-amber-600">+</sup>
                <span className="text-sm block mt-2 font-sans">
                  Premium Product
                </span>
              </li>
              <li className="text-4xl">
                {customerStats}K <sup className="text-amber-600">+</sup>
                <span className="text-sm block mt-2 font-sans">
                  Happy Customer
                </span>
              </li>
              <li className="text-4xl">
                {awardStats}K <sup className="text-amber-600">+</sup>
                <span className="text-sm block mt-2 font-sans">
                  Award Winning
                </span>
              </li>
            </ul>
          </div>
          <div>Image</div>
        </div>
      </section>
      {/* Partners */}
      <section id="partners">
        <div className="flex items-center justify-between"></div>
      </section>
    </div>
  );
};

export default Home;
