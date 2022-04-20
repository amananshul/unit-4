import React from 'react'

function RestaurentItem({item}) {
    console.log(item)
  return (
    // <div className="container">
        <div className="parent">
          <div className="container">
        <img className="imgU" src={item.url} alt="" />
        <div className="text">
        <p className="name">{item.name}</p>
        <p className="cate">{item.categories}</p>
        <p className="price">{item.price}</p>
        <p className="vote">{item.votes}</p> 
        <p className="rating">{item.rating}</p> 
        <p className="payment">{item.payment}</p> 
        </div>
          </div>
    </div>
  )
}

export default RestaurentItem