import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FoodCarousel from './components/foodCaroussel';
import FoodCard from './components/productCard';

import chicken1 from "./assets/img/chicken/box-1.png"
import chicken2 from "./assets/img/chicken/box-2.png"
import chicken3 from "./assets/img/chicken/box-3.png"
import chicken4 from "./assets/img/chicken/combo-1.png"
import chicken5 from "./assets/img/chicken/combo-2.png"
import chicken6 from "./assets/img/chicken/deluxe-1.png"
import chicken7 from "./assets/img/chicken/deluxe-2.png"
import chicken8 from "./assets/img/chicken/deluxe-3.png"
import burger1 from "./assets/img/burger/bacon-2.png"
import burger2 from "./assets/img/burger/bacon-3.png"
import burger3 from "./assets/img/burger/bacon.png"
import burger4 from "./assets/img/burger/beef-2.png"
import burger5 from "./assets/img/burger/beef-3.png"
import burger6 from "./assets/img/burger/beef-4.png"
import burger7 from "./assets/img/burger/beef.png"
import burger8 from "./assets/img/burger/cheeseburger-2.png"
import burger9 from "./assets/img/burger/cheeseburger-3.png"
import burger10 from "./assets/img/burger/cheeseburger.png"
import burger11 from "./assets/img/burger/double-chicken-2.png"
import burger12 from "./assets/img/burger/double-chicken.png"
import { useState } from 'react';
import Modal from './components/ordersModal';
import { FaShop } from 'react-icons/fa6';
import Nav from './components/nav';
import Section from './components/section';
function App() {
  const foodItems = [
    { name: "chicken box 1", image: chicken1, price: 12.99,id:1 ,category:"chicken" },
    { name: "chicken box 2", image: chicken2, price: 9.99,id:2 ,category:"chicken" },
    { name: "chicken box 3", image: chicken3 , price: 7.99,id:3 ,category:"chicken" },
    { name: "chicken combo 1", image: chicken4, price: 11.99,id:4,category:"chicken"  },
    { name: "chicken combo 2", image: chicken5, price: 5.99,id:5 ,category:"chicken" },
    { name: "chicken delux 1", image: chicken6, price: 12.99,id:6,category:"chicken"  },
    { name: "chicken delux 2", image: chicken7, price: 9.99,id:7 ,category:"chicken" },
    { name: "chicken delux 3", image: chicken8 , price: 7.99,id:8 ,category:"chicken" },
    { name: "chicken delux 3", image: chicken8 , price: 7.99,id:8 ,category:"chicken" },
    { name: "burger bacon 1", image: burger1, price: 5.99 ,id:10 ,category:"chicken"},
    { name: "burger bacon 2", image: burger2, price: 5.99 ,id:11 ,category:"burger"},
    { name: "burger bacon 3", image: burger3, price: 5.99 ,id:12 ,category:"burger"},
    { name: "burger beuf 1", image: burger4, price: 5.99 ,id:13 ,category:"burger"},
    { name: "burger beuf 2", image: burger5, price: 5.99 ,id:14 ,category:"burger"},
    { name: "burger beuf 3", image: burger6, price: 5.99 ,id:15 ,category:"burger"},
    { name: "burger beuf 4", image: burger7, price: 5.99 ,id:16 ,category:"burger"},
    { name: "cheeseburger 1", image: burger8, price: 5.99 ,id:17 ,category:"burger"},
    { name: "cheeseburger 2", image: burger9, price: 5.99 ,id:18 ,category:"burger"},
    { name: "cheeseburger 3", image: burger10, price: 5.99 ,id:19 ,category:"burger"},
    { name: "double chicken 1", image: burger11, price: 5.99 ,id:20 ,category:"burger"},
    { name: "double chicken 2", image: burger12, price: 5.99 ,id:21 ,category:"burger"},


  ];
  const[orders,setOrders] = useState<any>([])
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items per page
  const totalPages = Math.ceil(foodItems.length / itemsPerPage);
  
  const addToOrders = (item:any)=>{
    // if(orders.find((elem:any)=>elem.id==item.id)){

    // }
    setOrders([...orders,{...item,quantite:1}])
  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal state
  };
  const indexOfLastItem = currentPage * itemsPerPage ;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  

 
  return (
    <div className="p-6 bg-gradient-to-tr from-gray-100 via-slate-200 to-white h-full">
      <Nav orders={orders}/>
      <Section/>
      {/* Navigation */}
     

      {/* Food Carousel */}
      <h1>Best Offers For You</h1>

      <FoodCarousel orders={orders} addToOrders={addToOrders} foods={foodItems} />

      {/* Food Grid */}
    {false&&  <section className='flex flex-col w-full mt-8 min-h-screen'>
        <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-4">
          {currentItems.map((item: any) => (
            <FoodCard
              key={item.id}
              orders={orders}
              size="small"
              addToOrders={addToOrders}
              food={item}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-full text-white ${
              currentPage === 1 ? "bg-gray-500" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex + 1}
              onClick={() => handlePageClick(pageIndex + 1)}
              className={`px-3 py-2 rounded-full ${
                currentPage === pageIndex + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
            >
              {pageIndex + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-full text-white ${
              currentPage === totalPages ? "bg-gray-500" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            Next
          </button>
        </div>
      </section>}

      {/* Orders Modal */}
      {isModalOpen && (
        <Modal closeModal={toggleModal}>
          <div className="flex h-full flex-col">
            <table className="p-1 m-1 max-h-full w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase">
                <tr>
                  <th colSpan={4} className="px-6 py-3">Orders</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item: any) => (
                  <tr className="border-b" key={item.id}>
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                      <img src={item.image} width={50} alt={item.name} />
                    </td>
                    <td className="text-start md:inline hidden">{item.name}</td>
                    <td className="text-start space-x-3">
                      <span className="rounded-full px-2 bg-red-950 text-white">-</span>
                      {item.quantity}
                      <span className="rounded-full px-2 bg-red-950 text-white">+</span>
                    </td>
                    <td className="text-start">{(item.price * item.quantity).toFixed(2)}$</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App
