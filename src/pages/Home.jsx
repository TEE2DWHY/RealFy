// *
import { useEffect, useState } from "react";
// icons
import {
  Next,
  Previous,
  Location,
  List,
  ArrowTop,
  LightMode,
  DarkMode,
} from "../assets/icons/icons";
// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// images
import heroImg from "../assets/images/hero-img.jpg";
import estateFive from "../assets/images/estate-5.avif";
import contactImg from "../assets/images/contact-img.avif";
//data
import {
  brands,
  carouselContents,
  accordionData,
  contactDetails,
} from "../data/data";

const Home = () => {
  const [premiumProduct, setPremiumProduct] = useState(0);
  const [customerStats, setCustomerStats] = useState(8);
  const [awardStats, setAwardStats] = useState(14);

  useEffect(() => {
    const intervals = [];
    // Premium Product Interval
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
    intervals.push(productInterval);
    // Customer Stats Interval
    const customerInterval = setInterval(() => {
      setCustomerStats((prevStats) => {
        if (prevStats <= 28) {
          return prevStats + 3;
        } else {
          clearInterval(customerInterval);
          return prevStats;
        }
      });
    }, 500);
    intervals.push(customerInterval);
    // Award Stats Interval
    const awardInterval = setInterval(() => {
      setAwardStats((prevStats) => {
        if (prevStats <= 40) {
          return prevStats + 5;
        } else {
          clearInterval(awardInterval);
          return prevStats;
        }
      });
    }, 500);
    intervals.push(awardInterval);

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

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

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "bg-black text-white" : ""}>
        <div className="px-8 bg-bg-intro md:px-16">
          {/* Navbar */}
          <Navbar
            currentRoute={window.location.pathname}
            toggleMode={() => {
              setDarkMode(!darkMode);
            }}
            icons={darkMode ? <LightMode /> : <DarkMode />}
          />

          {/* Hero Section */}
          <section className="text-white pt-20 pb-20" id="hero-section">
            <div
              className="flex-col md:flex md:flex-row items-center justify-between"
              data-aos="fade-in"
            >
              <div className="">
                <h1 className="w-full leading-normal text-4xl uppercase md:w-2/4 md:text-5xl md:leading-normal ">
                  Discover Most Suitable Property.
                </h1>
                <p className="w-3/4 md:w-2/4 my-3 opacity-90">
                  Find a variety of properties that suit your taste.
                </p>
                <Location />
                <div className="relative">
                  <input
                    placeholder="Search by location..."
                    type="text"
                    className="px-5 w-4/5 text-sm py-4 md:px-12 rounded-lg md:w-5/12 md:text-lg border-2 border-gray-400 my-5 text-black focus:font-sans outline-none"
                  />
                  <button className="left-52 top-9 bg-blue-600 py-1 px-2 md:py-2 md:px-4 rounded-md text-sm absolute md:top-8 md:left-64">
                    Search
                  </button>
                </div>
                <ul className="w-full flex items-center justify-between md:w-2/4 my-3 px-4">
                  <li className="text-4xl">
                    {premiumProduct}K <sup className="text-amber-600">+</sup>
                    <span className="text-xs md:text-sm block mt-2 font-sans">
                      Premium Product
                    </span>
                  </li>
                  <li className="text-4xl">
                    {customerStats}K <sup className="text-amber-600">+</sup>
                    <span className="text-xs md:text-sm block mt-2 font-sans">
                      Happy Customer
                    </span>
                  </li>
                  <li className="text-4xl">
                    {awardStats}K <sup className="text-amber-600">+</sup>
                    <span className="text-xs md:text-sm block mt-2 font-sans">
                      Award Winning
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-2/5">
                <img
                  className="h-2/3 w-full mt-20 md:mt-0 md:h-hero-img-height block mx-auto rounded-tl-[135px] rounded-tr-[135px] rounded-br-[0px] rounded-bl-[0px]"
                  src={heroImg}
                  alt="hero-img"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Partners */}
        <section className="px-16 pt-14" id="partners">
          <div className="flex flex-col md:flex md:flex-row items-center justify-between">
            {brands.map((brand, index) => (
              <img
                data-aos={brand.animation}
                data-aos-duration={brand.duration}
                key={index}
                className={`w-2/3 h-2/3 sm:w-60 sm:h-60 cursor-pointer ${
                  darkMode ? "rounded-full" : ""
                } `}
                src={brand.img}
                alt={brand.alt}
              />
            ))}
          </div>
        </section>

        {/* Popular Residences */}
        <section className="px-8 md:px-16 mt-20" id="residence">
          <p className="text-xl text-amber-600 mb-3 font-sans">Best Choice.</p>
          <h1 className="text-3xl mb-4">Popular Residences.</h1>
          <div>
            <div className="px-4 flex hover:rounded-md hover:rounded-b-md hover:shadow-lg md:px-4 py-4">
              <div className="w-4/5 md:2/5 flex-shrink-0">
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
                <p className="w-4/5 text-md md:w-3/5 font-sans font-bold">
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
        <section className="px-8 md:px-16 py-40" id="features">
          <div className="flex-col flex items-center  md:flex md:flex-row md:justify-between h-[480px]">
            <div className="w-full md:w-2/5">
              <img
                className="w-full h-full rounded-md rounded-tl-[135px] rounded-tr-[135px] rounded-br-[0px] rounded-bl-[0px] cursor-pointer"
                src={estateFive}
                alt="features-img"
              />
            </div>
            <div className="pt-4 w-full md:w-2/5">
              <p className="text-amber-600 font-sans text-2xl">Our Value</p>
              <h1 className="text-2xl text-blue-700 font-sans md:text-4xl my-2 font-bold">
                Value We Give To You.
              </h1>
              <p className="w-full md:w-4/6 font-sans text-gray-500 flex items-center justify-center">
                We are always ready to help by providing the best service for
                you. We believe a good place to live can make your life better.
              </p>
              <div className="rounded-md border-solid border-gray-900 py-2">
                {accordionData.map((data, index) => (
                  <div
                    className="w-full text-blue-600 my-4 font-sans border-2 py-3 px-2 rounded-lg font-bold md:w-10/12"
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

        {/* Contact Us */}
        <section className="py-52 px-16 md:py-8" id="contact-us">
          <div className="flex  justify-between">
            <div className="font-sans">
              <p className="text-amber-600 text-2xl">Contact Us</p>
              <h1 className="text-blue-600 text-4xl font-bold my-3">
                Easy to contact us.
              </h1>
              <p className="w-6/12 text-gray-500">
                Is there a problem finding your dream home? Need a guide in
                buying Luxurious home? or need a consultation on residential
                issues? just contact us.
              </p>
              <div className="flex items-center justify-between my-5 w-6/12 flex-wrap">
                {contactDetails.map((contact, index) => (
                  <div
                    className="w-5/12 mb-8 flex flex-col rounded-md py-4 px-2 mr-2 shadow-md hover:shadow-blue-200 cursor-pointer"
                    key={index}
                  >
                    <p className="font-bold text-lg pl-3">{contact.header}</p>
                    <span className="text-gray-500 my-2 text-sm pl-3">
                      {contact.details}
                    </span>
                    <button className="bg-blue-200 text-blue-700 hover:bg-blue-300 font-bold rounded-md py-2 px-3 my-1 w-5/6 block m-auto text-sm">
                      {contact.button}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-6/12">
              <img
                className="w-full h-full rounded-md rounded-tl-[135px] rounded-tr-[135px] rounded-br-[0px] rounded-bl-[0px] cursor-pointer"
                src={contactImg}
                alt="features-img"
              />
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section
          id="get-started"
          className="my-40 flex items-center justify-center"
        >
          <div className=" bg-blue-600 border-gray-300 border-4 flex items-center justify-center flex-col rounded-2xl px-12 py-4 w3/5">
            <h1 className="text-4xl my-5 text-white">
              Get Started with Realfy.
            </h1>
            <p className="font-sans mb-2 text-sm text-gray-300  w-3/5">
              Subscribe and find super attractive price quotes from us, Find
              your residence soon.
            </p>
            <button className="font-sans bg-blue-400 text-white my-2 px-4 py-2 rounded-md text-sm hover:bg-blue-300">
              Get Started
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Top Arrow */}
        {arrowTop && (
          <a href="#" className="z-50">
            <ArrowTop />
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
