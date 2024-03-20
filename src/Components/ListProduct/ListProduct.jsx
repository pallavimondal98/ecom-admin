import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import { API_BASE_URL } from '../../Config';

const ListProduct = () => {

  const[allproducts, setAllProduts] = useState([]);

  const fetchInfo = async ()=>{
    await fetch(`${API_BASE_URL}/allproducts`)
    .then((res)=>res.json())
    .then((data)=>{setAllProduts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
    await fetch(`${API_BASE_URL}/removeproduct`,{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list_product'>
      <h1>All Product List</h1>
    <div className='listproduct-format-main'>
      <p>Products</p>
      <p>Title</p>
      <p>Old Price</p>
      <p>New Price</p>
      <p>Category</p>
      <p>Edit/Remove</p>
    </div>
    <div className='listproduct-allproduct'>
      <hr/>
      {allproducts.map((product, index)=>{
        return<>
        <div key={index} className='listproduct-format-main listproduct-format'>
            <img src={product.image} alt='' className='listproduct-icon'/>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <button type="button" className="btn  listproduct-remove-icon">
            <i className="fa-solid fa-pencil" style={{color: "#ffffff"}}></i>
            </button>
            <button onClick={()=>{remove_product(product.id)}} type="button" className="btn  listproduct-remove-icon">
              <i className="fa-solid fa-trash" style={{color: "#ffffff"}}></i>
            </button>
        </div>
        <hr/>
        </>
      })}
    </div>
    </div>
  )
}

export default ListProduct