import '../assets/styles/nav.css'
import cart from "../assets/images/cart.svg"
export default function Nav({orders}:any) {
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

          <button 
          onClick={()=>{
              document.querySelector('.cart-box')?.classList.toggle('active')            
          }} className="shopping-cart-btn ">
            <img src={cart} alt="shopping cart icon" width="18"/>
            <span className="count bg-blue-600 text-white">{orders?.length}</span>
          </button>

          <button className="menu-toggle-btn " onClick={()=>{
              document.querySelector('.cart-box')?.classList.remove('active')            
            document.querySelector('.navbar-nav')?.classList.toggle("active")
          }}>
          </button>

        </div>

      </div>

    </nav>

    <div className="cart-box ">

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

       

        

      </ul>

      <div className="cart-btn-group">
        <button className="btn btn-secondary">Total : {orders.reduce((prev:number,next:{price:number,quantite:number})=>prev +(next.price*next.quantite),0)}$</button>
        <button className="btn btn-primary">Checkout</button>
      </div>

    </div>

  </header>
  )
}
