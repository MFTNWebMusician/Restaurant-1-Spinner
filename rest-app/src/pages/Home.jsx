import React from 'react'
import '../assets/css/home.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaArrowDown } from "react-icons/fa";

const Home = () => {

    const [foods, setFoods]=useState([])
    const [foodInfo, setFoodInfo]=useState({})
    const [spinValue, setSpinValue]=useState(0)
    console.log(foodInfo)
  
    const getFoods=(category)=>{
      axios.get(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Restaurant?category=eq.${category}&select=*`,
      {
        headers:{
          apiKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
          Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
        }
      }
      )
      .then((res)=>setFoods(res.data))
      .catch((err)=>console.log(err))
    }
  
    const categories=['Breakfast', 'Lunch', 'Dinner']
  
    useEffect(()=>{
      getFoods('Breakfast')  
    },[])
  
    useEffect(()=>{
      setFoodInfo(foods[0])
    },[foods])

    window.addEventListener('keydown', (event)=> {
      
      
      if(event.key=='ArrowRight'){
        setSpinValue(spinValue + 60)
      }
      
      if(event.key=='ArrowLeft'){
        setSpinValue(spinValue - 60)     
      }
      ; 
     });

  return (
    <>
      <img src={foodInfo?.image} width={300} className='position-absolute foodinfo-image' />
      <div className='container-fluid position-relative'>
      <div className='row w-50 category-btns position-absolute '>
        <div className=" me-5 w-100">
          <div className="row d-flex justify-content-between w-100">
            {
            categories.map((categoryName)=>{
                return(
                  <div className='col-4 mt-2'>
                    <h5 className=' w-100' onClick={()=>getFoods(categoryName)} style={{cursor:'pointer'}}>
                    {categoryName}
                    </h5>
                  </div>
                )
            })
          }
          </div>
        </div>
        
      </div>
      
        <div className='row position-absolute w-100 back' style={{backgroundColor:foodInfo?.theme}}>
          <div className='col-4 text-start d-flex flex-column justify-content-end pb-5 ps-5'>
              <h2 className='food-info-price'>{foodInfo?.price}$</h2>
              <h2 className='food-info-name'>{foodInfo?.name}</h2>
              <p className='fw-bold'>{foodInfo?.description}</p>
              <button className='btn btn-dark w-50'>Order Now</button>
          </div>

          <div className='col-8 d-flex align-items-end'>
            <div className='w-100 d-flex justify-content-between pe-5 pb-4'>
            <button className='btn btn-dark rounded-circle' onClick={()=>setSpinValue(spinValue - 60)} ><FaArrowDown /></button>
            <button className='btn btn-dark rounded-circle me-4' onClick={()=>setSpinValue(spinValue + 60)}><FaArrowDown /></button>
            </div>
          </div>
        </div>
        <div className='row food-pages-container w-100 position-absolute border bg-light border-primary d-flex justify-content-end'>
          
          <div className='col-7 borde border-primar plate-spinner' style={{transform:`rotate(${spinValue}deg)`, transition:'1s'}}>
          
            <div className='row rounded-circle  h-100 position-relative plates p-0'>
              {
                foods.map((food)=>{
                  return(
                    <div className='col-3 rounded-circle position-absolute p-3'>
                      <div className='row'>
                        
                        <img src={food.image} className='w-100 object-fit-cover' onClick={()=>setFoodInfo(food)}/>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>  
      </div>
    </>
  )
}

export default Home
