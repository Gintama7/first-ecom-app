import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = (props) => {
    const [idInput,setIdInput] = useState('');
    const [priceInput,setPriceInput] = useState('');
    const [productInput,setProductInput] = useState('');
    const [categoryOption,setCategoryOption] = useState('');

const idChangeHandler=(e)=>{
    setIdInput(e.target.value);
}
const priceChangeHandler=(e)=>{
    setPriceInput(e.target.value);
}

const dishChangeHandler=(e)=>{
    setProductInput(e.target.value);
}

const categoryChangeHandler=(e)=>{
    setCategoryOption(e.target.value);
}

    const submitHandler =(e)=>{
        e.preventDefault();
       const obj = {id:+idInput,price:+priceInput,product:productInput,category:categoryOption};
       let obj1= JSON.stringify(obj);
       localStorage.setItem(idInput,obj1);
       props.formHandler(obj);
       setIdInput('');
       setProductInput('');
       setPriceInput('');
       setCategoryOption("choose an option");
    }

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="productId">Product ID</label>
        <input type="text" name="productId" id="" onChange={idChangeHandler} value={idInput}/>
        <label htmlFor="price">Selling Price</label>
        <input type="number" name='price'onChange={priceChangeHandler} value={priceInput} />
        <label htmlFor="product">Product Name</label>
        <input type="text" name="product" id="" onChange={dishChangeHandler} value={productInput}/>
        <label htmlFor="categoryId">Choose a Category</label>
        <select name="categoryId" id="" onChange={categoryChangeHandler} value={categoryOption}>
            <option value="choose an option">Categories</option>
            <option value="electronics">Electronic Items</option>
            <option value="food">Food Items</option>
            <option value="skincare">Skincare Items</option>
        </select>
        <button type='submit'>Add Product</button>
    </form>
  )
}

export default ProductForm
