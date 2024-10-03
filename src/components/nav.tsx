import '../assets/styles/nav.css'
import logo from "../assets/images/logo.svg"
import cart from "../assets/images/cart.svg"
import menu1 from "../assets/images/menu1.jpg"
import menu2 from "../assets/images/menu2.jpg"
import menu3 from "../assets/images/menu3.jpg"
import menu4 from "../assets/images/menu4.jpg"
import menu5 from "../assets/images/menu5.jpg"
export default function Nav({orders}:any) {


// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');



// nav toggle function
const navToggleFunc = function () {
  nav?.classList.toggle('active');
  navToggleBtn?.classList.toggle('active');
}

// shopping cart toggle function
const cartToggleFunc = function () {  }



// add event on nav-toggle-btn
navToggleBtn?.addEventListener('click', function () {

  // If the shopping-cart has an `active` class, it will be removed.
  if (shoppingCart?.classList.contains('active')) cartToggleFunc();

  navToggleFunc();

});

// add event on cart-toggle-btn
cartToggleBtn?.addEventListener('click', function () {

  // If the navbar-nav has an `active` class, it will be removed.
  if (nav?.classList.contains('active')) navToggleFunc();

  cartToggleFunc();

});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}
  return (
    <header className=''>

    <nav className="navbar bg-gradient-to-tr from-gray-100 via-slate-200 to-white ">

      <div className="navbar-wrapper">

        <a href="#">
            <span>logo</span>
        </a>

        <ul className="navbar-nav ">

          <li>
            <a href="#home" className="nav-link">Home</a>
          </li>

          <li>
            <a href="#about" className="nav-link">About</a>
          </li>

          <li>
            <a href="#services" className="nav-link">Services</a>
          </li>

          <li>
            <a href="#menu" className="nav-link">Our Menu</a>
          </li>

          <li>
            <a href="#testimonials" className="nav-link">Testimonials</a>
          </li>

        </ul>

        <div className="navbar-btn-group">

          <button onClick={()=>{
              if (nav?.classList.contains('active')) navToggleFunc();

              shoppingCart?.classList.toggle('active')            
          }} className="shopping-cart-btn">
            <img src={cart} alt="shopping cart icon" width="18"/>
            <span className="count">{orders?.length}</span>
          </button>

          <button className="menu-toggle-btn " onClick={()=>{
            nav?.classList?.toggle("active")
          }}>
            <span className="line one"></span>
            <span className="line two"></span>
            <span className="line three"></span>
          </button>

        </div>

      </div>

    </nav>

    <div className="cart-box active">

      <ul className="cart-box-ul">

        <h4 className="cart-h4">Your order.</h4>
        {orders.map((item:any)=> <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img src={item.image} alt="product image" className="product-img" width="50" height="50"
                loading="lazy"/>
            </div>

            <h5 className="product-name">{item?.name}</h5>
            <p className="product-price">
              <span className="small">$</span>{item?.price}
            </p>
          </a>
        </li>)}

       

        {/* <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img src={menu2} alt="product image" className="product-img" width="50" height="50"
                loading="lazy"/>
            </div>

            <h5 className="product-name">Chevrefried with honey</h5>
            <p className="product-price">
              <span className="small">$</span>14
            </p>
          </a>
        </li>

        <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img src={menu3} alt="product image" className="product-img" width="50" height="50"
                loading="lazy"/>
            </div>

            <h5 className="product-name">Crispy fish</h5>
            <p className="product-price">
              <span className="small">$</span>4
            </p>
          </a>
        </li>

        <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img src={menu4} alt="product image" className="product-img" width="50" height="50"
                loading="lazy"/>
            </div>

            <h5 className="product-name">Stracciatella</h5>
            <p className="product-price">
              <span className="small">$</span>11
            </p>
          </a>
        </li>

        <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img src={menu5} alt="product image" className="product-img" width="50" height="50"
                loading="lazy"/>
            </div>

            <h5 className="product-name">Sea bream carpaccio</h5>
            <p className="product-price">
              <span className="small">$</span>19
            </p>
          </a>
        </li> */}

      </ul>

      <div className="cart-btn-group">
        <button className="btn btn-secondary">Total : {orders.reduce((prev,next)=>prev +(next.price*next.quantite),0)}$</button>
        <button className="btn btn-primary">Checkout</button>
      </div>

    </div>

  </header>
  )
}
