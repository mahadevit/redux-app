import React,{useEffect, useState} from 'react'
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';

export const Product = () => {
    const[data,setData]=useState([]);
    const[filter, setFilter]=useState(data);
    const[loading,setLoading]=useState(pureFinalPropsSelectorFactory);
    let componentMounted=true;

    useEffect(()=>{
        const getProducts=async ()=>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products`);
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
        }
        return()=>{
            componentMounted=false;
        }
       getProducts();
      
    },[]);
  return (
    <div className="container">|
        <div className='row'>
            <div className='col-md-12'>
                <h1>Latest Products</h1>
            </div>
        </div>
    </div>
  )
}
