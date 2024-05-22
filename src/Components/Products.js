import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from '../Store/cartSlice'
import { setStatus } from '../Store/productSlice';


const Products = () => {
    const [products, setproducts] = useState([]);
    const dispatch =  useDispatch();
    useEffect(() => {
    //    dispatch(fetchProducts());//can pass params 
        const fetch_products = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            // console.log(data)
            setproducts(data);
            // setStatus()
        }
        fetch_products();
        console.log("here")
    },[]);

    const handleadd = (item)=>{
       dispatch(add(item));

    }

    return (
        <div className='productsWrapper'>
            {

                products.map(product => (<div className='card' key={product.id}>
                    <img src={product.image} alt="logo" />
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                    <button onClick={()=>{handleadd(product)}} className='btn'>Add to cart</button>
                </div>))
            }
        </div>
    )
}

export default Products
