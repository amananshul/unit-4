import React from 'react'
import {LightStyledComponent} from '../styles/Light.styles'
export const Lights = ({item}) => {
    // const { id, name,price,image,category} = value;
    //  const {idd} =useParams();
    return (
      <>
      {/* <Link to = {`/books/${id}`}> */}
        {/* <Flex > */}
        
          <div className="item">
          <LightStyledComponent>
              <div className="citem">
          <img src={item.image} alt={item.name} height = "200px" width={"200px"} />  
          <h3>{item.name}</h3>
          <h4>{item.price}</h4>
          <h4>{item.category}</h4>
              </div>
          </LightStyledComponent>
              </div>

        {/* </Flex> */}
      {/* </Link> */}
  
     
      </>
  
    );
}
