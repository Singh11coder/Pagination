import React, { useState, useEffect } from 'react'
import Card from './components/Card';

const App = () => {

  const [data,setData] = useState([]);
  const [pages,setPages] = useState(0);
  const [show,setShow] = useState([]);
  const [current, setCurrent] = useState(0);
  

  const fetchData = async() => {
     try{
       const res = await fetch("https://dummyjson.com/products?limit=100");
       const ans = await res.json();
       console.log(ans);
       setData(ans.products);
       let totalProducts = ans.products.length;
       let count = (totalProducts/4) + (totalProducts%4);
       setPages(count);

       let pr = ans.products.filter((p,index) => {
          return (index<=3)
       })
       setShow(pr);
     }
     catch(error){
       console.log(error.message);
     }
  }

  useEffect(() => {
     fetchData();
  },[])

  const handlePages = (ind) => {
    let ans ; 
    if(ind == 0){
       ans = data.filter((d,index) => {
          return (index<=3);
       })
    }
    else{
      ans = data.filter((d,index) => {
         return (index>=(4*(ind+1-1)) && (index<4*(ind+1)))
      })
    }
    console.log(ans);
    setShow(ans);
    setCurrent(ind);
  }
 
  const handlePrev = () => {
   console.log(current)
      let ans,ind ;
      if(current == 0 ){
         ind = 24;
      }
      else{
         ind=current-1;
      }
      
      ans = data.filter((d,index) => {
         return (index>= (4*ind));
      })

      setShow(ans);
      setCurrent(current-1);
  }

  const handleNext = () => {
   
  }
  
  return (
    <div className="bg-gray-600 h-screen ">
       <h1 className="text-white text-4xl font-semibold text-center pt-4">Product Data</h1>
       <div className="flex gap-5 ml-20 my-4">
        <button
        onClick={() => handlePrev()} 
        className="cursor-pointer text-xl bg-blue-600 py-2 px-4 text-white rounded">Prev</button>
        {data && Array.from({length:pages}).map((_,index) => {
         return <button 
           key={index} 
            onClick={() => handlePages(index)}
           className={(current == index) ? `bg-orange-600 cursor-pointer rounded text-white py-1 px-2 text-xl`  :`bg-blue-600 cursor-pointer rounded text-white py-1 px-2 text-xl`}>
          {index+1}
         
         </button>
       })}
       <button 
         className="cursor-pointer text-xl bg-blue-600 py-2 px-4 text-white rounded "
         onClick={() => handleNext()}
      >Next</button>
       </div>
     
       <div className="flex flex-wrap ml-8 gap-8">
          {show.map((d) => {
             return <div key={d.id}>
                <Card product={d}/>
             </div>
          })}
       </div>
    </div>
  )
}

export default App
