import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingBag } from "react-icons/md";


const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid position-absolute header-box">
            <div className="row d-flex justify-content-between">
                                
              <div className="col-2 ">
                <Link className='nav-link' to='/'><h3>FoodSpin</h3></Link> 
              </div>
                
              <div className="col-2">
                <Link className='' to='/cart'><MdOutlineShoppingBag size={30}/></Link> 
              </div>
   
            </div>
        </div>
      </header>
    </>
  )
}

export default Header