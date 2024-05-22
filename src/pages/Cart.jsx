import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(({cart}) => cart.initstate)
  const handledelete = (prodid) => {
      dispatch(remove(prodid))
  }

  return (
    <div> 
      <h3>Cart</h3>
      <div className='cartWrapper'>
      {
          items.map(product => (
            <div className="cartCard">
              <img src={product.image} alt="logo" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => handledelete(product.id)} className="btn">Remove</button>
            </div>
          ))
      }
      </div>
    </div>
  )
}

export default Cart;
