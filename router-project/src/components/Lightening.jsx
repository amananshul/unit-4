import React,{ useEffect, useState} from 'react'
import {Lights} from './Lights'
export const Lightening = () => {
//   const [dataLight,setDataLights]=React.useState([])
//   useEffect(() => {
//     const getData = async() =>{
//      let res = await fetch("http://localhost:8080/lights")
//      let data=await res.json()
//      setDataLights(...dataLight,data)
//     //  console.log(data)
//     }
//   getData()
//   },[])
// // console.log(dataLight)
//   return (
//     <div>
//       <h1>hello</h1>
//     {dataLight.map((item)=>
//            {
//              return(
//               <Lights key={item.id} item={item} />
//              )
//            }
//           )}
//     </div>
//   )
const [data, setData] = useState([]);
const getData = async() =>{
  let res = await fetch(`http://localhost:8080/lights`)
  let lights = await res.json();
  console.log(lights)
  setData(...data,lights)
}
useEffect(() => {
  // make a GET request to http://localhost:8080/lights to get all the lights data
  getData();
}, []);

return (
  <>
    <h1>lights</h1>
    {/* <Grid data-testid="lights-container"> */}
    <div>

      {/* {!!data && 
        // map thorugh the data and use <BookCard/> component to display each book
      } */}
        {data.map((item)=>
         {
           return(
             <Lights key={item.id} item={item} />
           )
         }
        )}
             </div>
    {/* </Grid> */}
  </>
);
    }
