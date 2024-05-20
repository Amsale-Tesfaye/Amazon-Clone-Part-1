import React, { useEffect, useState } from 'react'
import axios from 'axios'
 import ProductCard from './ProductCard';
 import classes from './Product.module.css'
import Loader from '../Loader/Loader';


function Product () {
    const [products, setProducts] = useState()
     const [isLoading, SetIsLoading] = useState(false)

    useEffect(() => {
      SetIsLoading(true)
        axios.get('https://fakestoreapi.com/products')
          .then((res) => {
            setProducts(res.data)
            SetIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
             SetIsLoading(false)

          });
    }, [] )

  return (
 <>
 {
   
     isLoading?(<Loader/>) : ( <section className={classes.products_container}>
        {
            products?.map((singleProduct)=> {
                return ( <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id}/>)
            })
        }
    </section>)
}
  </>
  )
}

export default Product

