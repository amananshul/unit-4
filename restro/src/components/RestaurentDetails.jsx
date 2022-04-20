import React, { useState } from 'react'
import RestaurentItem from './RestaurentItem'
import Form from './Form'

function RestaurentDetails() {
    const [data,setdata]=React.useState([])
    const[showForm, setShowForm]=useState(false)

    React.useEffect(() => {
      const getFoodData = async () => {
       
          let res = await fetch("http://localhost:3000/data");
          let data = await res.json();
          setdata(data);
      };
      getFoodData();
    }, []);
  const addFoodData=(item)=>{
    setdata([...data,item]);
     console.log(data)
  }
  return (
    <div>
      <h1>Restaurent detail</h1>
      <button onClick={()=>{setShowForm(!showForm)}}>Add Restaurent</button>
      {showForm?(<Form addFood={addFoodData}/>):(null)}
    {data.map((item)=>{
      return <RestaurentItem key={item.id} item={item}/ >
    })}
    </div>
  )
}

export default RestaurentDetails