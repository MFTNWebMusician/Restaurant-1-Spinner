// mftndatabaseinsupabase

import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './layout/Header';
import AppRouter from './router/AppRouter';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
 
  const [foods, setFoods]=useState([])
  const [foodInfo, setFoodInfo]=useState({})
  console.log(foodInfo)

  const getBreakfast=()=>{
    axios.get('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Restaurant?category=eq.Breakfast&select=*',
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

  useEffect(()=>{
    getBreakfast()  
  },[])

  useEffect(()=>{
    setFoodInfo(foods[0])
  },[foods])
 
  

  console.log(foods[0])
  
  return (
    <div className="App">
      {/* <Header /> */}
      <div className='container-fluid position-relative border'>
        <div className='row position-absolute w-100 back bg-danger'>
          <div className='col-5 text-start border border-dark d-flex flex-column justify-content-center pb-5 ps-5'>
              <h3>{foodInfo?.price}</h3>
              <h2>{foodInfo?.name}</h2>
              <p>{foodInfo?.description}</p>
              <button className='btn btn-dark w-50'>Order Now</button>
          </div>
        </div>
        <div className='row food-pages-container w-100 position-absolute border bg-warning border-primary d-flex justify-content-end'>
          
          <div className='col-7 borde border-primar plate-spinner'>
            <div className='row rounded-circle border h-100 position-relative plates p-0'>
              {
                foods.map((food)=>{
                  return(
                    <div className='col-3 rounded-circle position-absolute p-3'>
                      <div className='row'>
                        {/* <h4 className=''>{food.name}</h4> */}
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
    </div>
  );
}

export default App;
