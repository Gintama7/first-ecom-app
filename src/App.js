import ProductForm from './components/ProductForm';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData,setFormData] = useState('');
  const [electronicsInfo,setElectronicsInfo] = useState([]);
const [foodInfo,setFoodInfo] = useState([]);
const [skinInfo,setSkinInfo] = useState([]);




  const formHandler=(item)=>{
   
    setFormData(item); 
    
      if(item.category === 'electronics')
      {
         setElectronicsInfo((prev)=> [item,...prev]);
        
      }
      else if(item.category === 'food')
      {
        setFoodInfo((prev)=>[item,...prev]);
      }
      else if(item.category === 'skincare')
      {
        setSkinInfo((prev)=>[item,...prev]);
      }
      
      
  }
  

  const deleteHandler=(e,key)=>{
    const mainParent = e.target.parentElement.parentElement;
    mainParent.removeChild(mainParent.lastElementChild);
    localStorage.removeItem(key);
  }
  return (
    <div className="app">
      <ProductForm formHandler={formHandler}/>
      <h1>Products</h1>
      <div className="productlist">
      <ul id="table1List"><h2>Electronic Items</h2> 
      
  {electronicsInfo.map((item)=>(
    <li key={item.id}>{item.product} - {item.category} - {item.price} <button className='delBtn' onClick={(e)=>deleteHandler(e,item.id)}>Delete</button></li>
  ))}
   </ul>
   <ul id="table2List"><h2>Food Items</h2> 
  {foodInfo.map((item)=>(
    <li key={item.id}>{item.product} - {item.category} - {item.price} <button className='delBtn' onClick={(e)=>deleteHandler(e,item.id)}>Delete</button></li>
  ))}
   </ul>
   <ul id="table3List"><h2>Skincare Items</h2> 
  {skinInfo.map((item)=>(
    <li key={item.id}>{item.product} - {item.category} - {item.price} <button className='delBtn' onClick={(e)=>deleteHandler(e,item.id)}>Delete</button></li>
  ))}
   </ul>
   </div>
    </div>
  );
}

export default App;
