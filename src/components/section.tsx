import food1 from "../assets/images/food1.png"
import food2 from "../assets/images/food2.png"
import food3 from "../assets/images/food3.png"
import dialog1 from "../assets/images/dialog-1.svg"
import dialog2 from "../assets/images/dialog-2.svg"
import circle from "../assets/images/circle.svg"
import ring from "../assets/images/ring.svg"
import menu from "../assets/images/menu.svg"
import arrow from "../assets/images/arrow.svg"
import {motion} from "framer-motion"
export default function Section() {

  

 
  return (
    <motion.section className="home" id="home">

<motion.div 
      className="home-left"
      initial={{ opacity: 0, x: -50 }} // Start hidden and slightly left
      animate={{ opacity: 1, x: 0 }}   // Fade in and move to original position
      transition={{ duration: 0.5 }}    // Duration of animation
    >
      <motion.h1 
        className="main-heading"
        initial={{ opacity: 0, y: -30 }} // Start hidden and slightly above
        animate={{ opacity: 1, y: 0 }}   // Fade in and move to original position
        transition={{ duration: 0.7 }}   // Slightly delayed animation
      >
        We do not cook, we create your emotions!
      </motion.h1>

      <motion.p 
        className="home-text"
        initial={{ opacity: 0, y: 30 }}  // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }}   // Fade in and move up
        transition={{ duration: 0.6, delay: 0.2 }}  // Delay the text slightly
      >
        Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi
      </motion.p>

      <motion.div 
        className="btn-group"
        initial={{ opacity: 0, scale: 0.8 }} // Shrink and fade in
        animate={{ opacity: 1, scale: 1 }}   // Grow and become fully visible
        transition={{ duration: 0.5, delay: 0.4 }} // Delayed for a nice stagger effect
      >
        <motion.button 
          className="btn bg-blue-700 text-white rounded btn-icon"
          whileHover={{ scale: 1.1 }} // Slightly grows when hovered
          whileTap={{ scale: 0.95 }}  // Shrinks slightly when clicked
        >
          <img src={menu} alt="menu icon" />
          Our menu
        </motion.button>

        <motion.button 
          className="btn btn-secondary btn-icon"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={arrow} alt="menu icon" />
          About us
        </motion.button>
      </motion.div>
    </motion.div>

    <div className="home-right">

      <img src={food1} alt="food image" className="food-img food-1" width="200" loading="lazy"/>
      <img src={food2} alt="food image" className="food-img food-2" width="200" loading="lazy"/>
      <img src={food3} alt="food image" className="food-img food-3" width="200" loading="lazy"/>

      <img src={dialog1} alt="dialog" className="dialog dialog-1" width="230"/>
      <img src={dialog2} alt="dialog" className="dialog dialog-2" width="230"/>

      <img src={circle} alt="circle shape" className="shape shape-1" width="25"/>
      <img src={circle} alt="circle shape" className="shape shape-2" width="15"/>
      <img src={circle} alt="circle shape" className="shape shape-3" width="30"/>
      <img src={ring} alt="ring shape" className="shape shape-4" width="60"/>
      <img src={ring} alt="ring shape" className="shape shape-5" width="40"/>

    </div>

  </motion.section>
    )
}
