import React from 'react'
import { useCart } from 'react-use-cart'
import '../assets/css/cart.css'

const Cart = () => {
  const {items, updateItemQuantity}=useCart()
  return (
    <>
      <div className="container-fluid py-5">
        {items.map((foodInCart)=>{
          return(
            <>
            <div className='row my-5 border cart-food-box' key={foodInCart.id}>
              <div className="col-12">
                <div className="row">
                  <div className="col-3"><img src={foodInCart.image} className='w-100'/></div>
                  <div className="col-3 d-flex justify-content-center align-items-center"><h3>{foodInCart.name}</h3></div>
                  <div className="col-3 d-flex justify-content-center align-items-center"><h4>{foodInCart.price}</h4></div>
                  <div className="col-3">
                    <div className="row border h-100">
                      <div className="col-4 d-flex justify-content-center align-items-center"><button className='border-0 bg-secondary w-100 h-50' onClick={()=>updateItemQuantity(foodInCart.id, foodInCart.quantity-1)}><h2>-</h2></button></div>
                      <div className="col-4 d-flex justify-content-center align-items-center"><h2>{foodInCart.quantity}</h2></div>
                      <div className="col-4 d-flex justify-content-center align-items-center"><button className='border-0 bg-secondary w-100 h-50' onClick={()=>updateItemQuantity(foodInCart.id,foodInCart.quantity+1)}><h2>+</h2></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Cart
