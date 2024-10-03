import Slider from "react-slick";
import FoodCard from "./productCard";
import { useEffect, useState } from "react";
const FoodCarousel = ({ foods,addToOrders,orders }) => {
  const [perView,setPerview] = useState<number>(5)

  const perviewItems = ()=>{
    if(window.innerWidth<400)
    {
      return setPerview(3)
    }
    else if(window.innerWidth<600)
    {
      return setPerview(4)
    }
    else return setPerview(5)
  }
  useEffect(()=>{
    perviewItems()
  },[window.innerWidth])
    // Slider settings for auto-changing
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: perView, // Number of cards visible at a time
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Auto-change speed (3 seconds)
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="container mx-auto px-4 bg-transparent">
        <Slider {...settings}>
          {foods.map((food:any, index:number) => (
            <div key={index}>
              <FoodCard orders={orders} addToOrders={addToOrders}  size='large' food={food} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default FoodCarousel;
  