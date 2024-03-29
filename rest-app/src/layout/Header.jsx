import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingBag } from "react-icons/md";
import { useCart } from 'react-use-cart';


const Header = () => {
  const {totalItems}=useCart()
  return (
    <>
      <header>
        <div className="container-fluid position-absolute header-box">
            <div className="row d-flex justify-content-between">
                                
              <div className="col-2 ">
                <Link className='nav-link' to='/'><h3>FoodSpin</h3></Link> 
              </div>
                
              <div className="col-2 mt-1 position-relative">
                <Link className='nav-link' to='/cart'><MdOutlineShoppingBag size={30}/></Link>
                <h6 className='position-absolute bg-danger total-items rounded-circle'>{totalItems}</h6> 
              </div>
   
            </div>
        </div>
      </header>
    </>
  )
}

export default Header