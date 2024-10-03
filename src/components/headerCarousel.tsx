import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Header Carousel Component using React-Slick
const SpecialOffersCarousel = () => {
  const offers = [
    {
      title: "Moroccan Dinner: Tajine + Lemonade + Fruits",
      description: "Enjoy a traditional Moroccan dinner with delicious tajine and fresh lemonade!",
      image: "https://i.imgur.com/UNc5vyo.jpg", // Example image URL
      cta: "Order Now",
    },
    {
      title: "Tacos + Salad + Fries",
      description: "Get our special Tacos with a side of salad and crispy fries.",
      image: "https://i.imgur.com/bXtPl8C.jpg", // Example image URL
      cta: "Order Now",
    },
    {
      title: "Grilled Chicken + Couscous + Vegetables",
      description: "A hearty meal with grilled chicken, couscous, and fresh vegetables.",
      image: "https://i.imgur.com/zTxUuht.jpg", // Example image URL
      cta: "Grab It Now",
    },
    {
      title: "Traditional Moroccan Couscous",
      description: "Enjoy the authentic taste of Moroccan couscous, a must-try!",
      image: "https://i.imgur.com/DNtn5Wx.jpg", // Example image URL
      cta: "Order Now",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full h-[400px]">
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl font-bold">{offer.title}</h1>
              <p className="mt-4 text-lg md:text-xl">{offer.description}</p>
              <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition">
                {offer.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialOffersCarousel;
