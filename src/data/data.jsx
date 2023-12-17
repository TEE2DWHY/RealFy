import estateOne from "../assets/images/estate.jpeg";
import estateTwo from "../assets/images/estate-2.jpeg";
import estateThree from "../assets/images/estate-3.jpeg";
import estateFour from "../assets/images/estate-4.jpeg";
import brandOne from "../assets/images/brand-1.avif";
import brandTwo from "../assets/images/brand-2.avif";
import brandThree from "../assets/images/brand-3.avif";
import brandFour from "../assets/images/brand-4.avif";
import { ArrowDown, Cancel } from "../assets/icons/icons";

// brands array
const brands = [
  {
    img: brandOne,
    alt: "brand-img",
    animation: "slide-left",
    duration: "2000",
  },
  {
    img: brandTwo,
    alt: "brand-img",
    animation: "slide-left",
    duration: "1400",
  },
  {
    img: brandThree,
    alt: "brand-img",
    animation: "slide-left",
    duration: "1000",
  },
  {
    img: brandFour,
    alt: "brand-img",
    animation: "slide-left",
    duration: "800",
  },
];

// carousel contents
const carouselContents = [
  {
    img: estateOne,
    price: "$75,023",
    name: "Briticia Private Garden",
    address:
      "Oliva Private Garden Along St David church arequipa, - Peru Av. Sol #5276.",
  },
  {
    img: estateTwo,
    price: "$80,000",
    name: "Sunset Villa",
    address: "Near Beach Road, California - USA.",
  },
  {
    img: estateThree,
    price: "$65,000",
    name: "Hillside Hideout",
    address: "On the foothills of Mountain Range, New Zealand.",
  },
  {
    img: estateFour,
    price: "$95,000",
    name: "Lakeview Cottage",
    address: "By the Lakeside, Ontario - Canada.",
  },
];

const accordionData = [
  {
    question: "Best interest rates on the market",
    icon: <ArrowDown />,
    close: <Cancel />,
    answer:
      "We offer competitive interest rates that suit your budget and financial needs. Our rates are designed to ensure affordability and convenience for property investments.",
    accordionKey: 0,
  },
  {
    question: "Prevent unstable prices",
    icon: <ArrowDown />,
    close: <Cancel />,
    answer:
      "We guarantee price stability on your property investments. Our transparent pricing models ensure no unexpected price changes, securing your investment's value over time.",
    accordionKey: 1,
  },
  {
    question: "Security of Data.",
    icon: <ArrowDown />,
    close: <Cancel />,
    answer:
      "Data security is our top priority. We implement state-of-the-art security measures to protect your personal and property-related information, ensuring confidentiality and trust.",
    accordionKey: 2,
  },
];

const contactDetails = [
  {
    header: "Call",
    details: "022.321.165.19",
    button: "Call Now",
  },
  {
    header: "Chat",
    details: "022.321.165.19",
    button: "Chat Now",
  },
  {
    header: "Video Call",
    details: "022.321.165.19",
    button: "Video Call Now",
  },
  {
    header: "Message",
    details: "022.321.165.19",
    button: "Message Now",
  },
];

export { brands, carouselContents, accordionData, contactDetails };
