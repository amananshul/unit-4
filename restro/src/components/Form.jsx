import React from 'react'
// price": 300,
//     "min-price": 50,
//     "votes": 942,
//     "rating": 4.3,
//     "payment": [
//       "card",
//       "cash",
//       "upi"
//     ],
//     "url"
function Form({addFood}) {
 const[dataObj, setDataObj]=React.useState({})
 
   const handleClick=async()=>{
  //  e.preventDefault();
   let response=await fetch("http://localhost:3000/data",{
       method: "POST",
       headers: {"content-type": "application/json"},
       body: JSON.stringify(
       dataObj
       )
   })
   let dataA=response.json();
   console.log(dataA);
   addFood(dataA);
   
   }
   const handleChange=(e)=>{
     const inputName=e.target.name
     setDataObj({...dataObj,[inputName]:e.target.value})
   }
   

  return (
    <div className="Form">
        <form onSubmit={handleClick}>
         <div>
             <label>Name</label>
             <input type="text" name="name" placeholder="Enter Your details" onChange={handleChange} />
         </div>
         <div>
             <label>price</label>
             <input type="text" name="price" placeholder="Enter Your details" onChange={handleChange}/>
         </div>

         <div>
             <label>rating</label>
             <input type="text" name="rating" placeholder="Enter Your details" onChange={handleChange}/>
         </div>
         <div>
             <label>votes</label>
             <input type="text" name="votes" placeholder="Enter Your details" onChange={handleChange}/>
         </div>
         <input type="submit" />
         </form>
       
    </div>
  )
}

export default Form