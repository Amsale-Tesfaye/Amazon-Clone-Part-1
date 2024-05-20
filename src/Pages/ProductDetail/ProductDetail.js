import React, { useEffect, useState } from 'react'
// import classes from './ProductDetail.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'

function ProductDetail() {
  const [product, setProduct] = useState({})
  const [isLoading, SetIsLoading] = useState(false)
  const { productId } = useParams();
  useEffect(()=> {
    SetIsLoading(true)
  axios.get(`${productUrl}/products/${productId}`)
  .then((res)=>{
    // console.log(res.data)
    setProduct(res.data);
    SetIsLoading(false)

  }).catch((err)=> {
    console.log(err)
    SetIsLoading(false)

  })

  }, [])

  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard 
      product={product} 
      flex ={true} 
      renderDesc={true}
      renderAdd={true}

      
      />)}
    </LayOut>
  );
}

export default ProductDetail