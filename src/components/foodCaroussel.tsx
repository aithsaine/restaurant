import Slider from "react-slick";
import FoodCard from "./productCard";
import { useEffect, useState } from "react";
const FoodCarousel = ({ foods,addToOrders,orders }:{foods:FoodType[],addToOrders:Function,orders:OrderType[] }) => {
  const [perView,setPerview] = useState<number>(5)


  
    // Slider settings for auto-changing
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4, // Number of cards visible at a time on large screens
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Auto-change speed (3 seconds)
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1440, // Large screens (desktops)
          settings: {
            slidesToShow: 4, // Show 4 cards on larger desktops
          },
        },
        {
          breakpoint: 1024, // Medium screens (tablets, small desktops)
          settings: {
            slidesToShow: 2, // Show 3 cards on tablets and medium devices
          },
        },
        {
          breakpoint: 768, // Small screens (large mobile devices)
          settings: {
            slidesToShow: 1, // Show 2 cards on smaller devices
          },
        }
      ],
    };
    
  
    return (
      <div className="container mx-auto bg-transparent">
        <Slider {...settings}>
          {foods.map((food, index:number) => (
            <div key={index}>
              <FoodCard orders={orders} addToOrders={addToOrders}   food={food} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default FoodCarousel;
  