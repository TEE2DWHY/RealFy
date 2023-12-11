import { useEffect, useState } from "react";
import { Location } from "../assets/icons/icons";
import Navbar from "../components/Navbar";

// images
import heroImg from "../assets/images/hero-img.jpg";

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
    <>
      <div className="bg-bg-intro  px-16">
        {/* Navbar */}
        <Navbar currentRoute={window.location.pathname} />
        {/* Hero Section */}
        <section className="text-white pt-20 pb-20" id="hero-section">
          <div className="flex items-center justify-between" data-aos="fade-in">
            <div className="3/5">
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
                className="py-4 px-12 rounded-lg w-5/12 border-2 border-gray-400 my-5 text-black focus:font-sans outline-none"
              />
              <button className="bg-blue-600 py-2 px-6 -ml-28 rounded-md text-sm">
                Search
              </button>
              <ul className="flex items-center justify-between w-2/5 my-3 p-4">
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
            <div className="w-2/5">
              <img
                className="w-full h-full block m-auto rounded-tl-[82px] rounded-tr-[84px] rounded-br-[0px] rounded-bl-[14px]"
                src={heroImg}
                alt="hero-img"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Partners */}
      <section className="px-16 pt-14" id="partners">
        <div className="flex items-center justify-between">
          <div>Company A</div>
          <div>Company B</div>
          <div>Company C</div>
          <div>Company D</div>
        </div>
      </section>
    </>
  );
};

export default Home;
