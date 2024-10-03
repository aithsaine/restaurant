import { motion } from "framer-motion";
import { FaReceipt, FaShoppingCart } from "react-icons/fa";

const FoodCard = ({ food, addToOrders, size = "large", orders = [] }: {
  food: { name: string, id: number, image: string, price: string, category: string },
  addToOrders: Function,
  size: 'small' | "large",
  orders: { id: number, name: string, image: string, price: string, quantite: number, category: string }[]
}) => {
  return (
    <motion.div
      className={`${size === "small" ? "w-[150px]" : "w-[240px]"} bg-gray-300 rounded-lg shadow-md items-center flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-105`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        className={`w-full ${size === "small" ? "h-36" : "h-36 w-36"} object-cover rounded-t-lg`}
        src={food.image}
        alt={food.name}
      />
      <div className="p-4 text-center">
        <h3 className="text-sm font-semibold text-gray-800 truncate">{food.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-600">${food.price}</p>
          {!orders.find(item => item.id === food.id) ? (
            <button
              onClick={() => addToOrders(food)}
              className="bg-red-600 text-gray-900 p-2 rounded-full hover:bg-red-700 transition"
            >
              <FaShoppingCart size={18} />
            </button>
          ) : (
            <button className="bg-green-600 text-white p-2 rounded-full">
              <FaReceipt size={18} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
