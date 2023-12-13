// *
import { useEffect, useState } from "react";
// icons
import {
  Next,
  Previous,
  Location,
  List,
  ArrowTop,
} from "../assets/icons/icons";
// components
import Navbar from "../components/Navbar";
// images
import heroImg from "../assets/images/hero-img.jpg";
import estateFive from "../assets/images/estate-5.avif";
//data
import { brands, carouselContents, accordionData } from "../data/data";

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

  const [currentContent, setCurrentContent] = useState(0);
  const handleSlide = (index) => {
    setCurrentContent(index);
  };

  const [clicked, setClicked] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = (index) => {
    setClicked(index);
    setIsOpen(!isOpen);
  };

  const [arrowTop, setArrowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setArrowTop(true);
      } else {
        setArrowTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-bg-intro px-16 z-z-intro">
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
              <ul className="flex items-center justify-between w-2/4 my-3 px-4">
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
                className="w-full h-hero-img-height block mx-auto rounded-tl-[135px] rounded-tr-[135px] rounded-br-[0px] rounded-bl-[0px]"
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
          {brands.map((brand, index) => (
            <img
              data-aos={brand.animation}
              data-aos-duration={brand.duration}
              key={index}
              className="w-60 h-60 cursor-pointer"
              src={brand.img}
              alt={brand.alt}
            />
          ))}
        </div>
      </section>

      {/* Popular Residences */}
      <section className="px-16 mt-20" id="residence">
        <p className="text-xl text-amber-600 mb-3 font-sans">Best Choice.</p>
        <h1 className="text-3xl mb-4">Popular Residences.</h1>
        <div>
          <div className="flex hover:rounded-md hover:rounded-b-md hover:shadow-lg px-4 py-4">
            <div className="flex-shrink-0">
              <img
                className="rounded-lg my-3 cursor-pointer"
                src={carouselContents[currentContent].img}
                alt="carousel-img"
                data-aos="fade-in"
              />
              <p className="font-bold font-sans text-md">
                {carouselContents[currentContent].price}
              </p>
              <p className="font-sans text-amber-600 text-md">
                {carouselContents[currentContent].name}
              </p>
              <p className="text-md w-3/5 font-sans font-bold">
                {carouselContents[currentContent].address}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center my-6">
            <button
              className="border-gray-400 bg-slate-300 px-2 py-1 rounded-md mr-3"
              onClick={() =>
                handleSlide((currentContent + 1) % carouselContents.length)
              }
            >
              <Next />
            </button>
            <button
              className="border-gray-400 bg-slate-300 px-2 py-1 rounded-md"
              onClick={() => {
                handleSlide(
                  (currentContent - 1 + carouselContents.length) %
                    carouselContents.length
                );
              }}
            >
              <Previous />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-16 py-40" id="features">
        <div className="flex justify-between h-[480px]">
          <div className="w-5/12">
            <img
              className="w-5/6 h-full rounded-md rounded-tl-[135px] rounded-tr-[135px] rounded-br-[0px] rounded-bl-[0px]"
              src={estateFive}
              alt="features-img"
            />
          </div>
          <div className="pt-4 px-20 w-3/5">
            <p className="text-amber-600 font-sans text-2xl">Our Value</p>
            <h1 className="text-blue-700 font-sans text-4xl my-2 font-bold">
              Value We Give To You.
            </h1>
            <p className="w-4/6 font-sans text-gray-500 flex items-center justify-center">
              We are always ready to help by providing the best service for you.
              We believe a good place to live can make your life better.
            </p>
            <div className="rounded-md border-solid border-gray-900 py-2">
              {accordionData.map((data, index) => (
                <div
                  className="text-blue-600 my-4 font-sans border-2 py-3 px-2 rounded-lg font-bold w-10/12"
                  key={index}
                >
                  <div className="flex items-center justify-between">
                    <span>
                      <List /> {data.question}
                    </span>
                    <span onClick={() => handleAccordion(data.accordionKey)}>
                      {data.icon}
                    </span>
                  </div>
                  {isOpen && clicked === data.accordionKey && (
                    <p
                      className="text-gray-500 my-2 px-2 text-sm"
                      data-aos="fade-in"
                    >
                      {accordionData[clicked].answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {arrowTop && (
        <a href="#">
          <ArrowTop />
        </a>
      )}
    </>
  );
};

export default Home;
