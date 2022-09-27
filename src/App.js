import { useEffect, useState } from 'react';
import './App.css';
import Dish from './components/Dish';

function App() {

  const [dishes, setDishes] = useState([]);


  
useEffect(() => {
  fetch('https://cabra-pizza.herokuapp.com/api/dishes')
   .then(res => res.json())
   .then(data => {
    setDishes(data)
   })
}, [])


  return (
    <div className="App">
      <div className='banner-container'>
        <img src='images/banner.png' alt='cabra pizza banner' />
      </div>
      <div className='logo-container'>
        <img src='images/logo.png' alt='cabra pizza logo' />
      </div>
      <section className='menu'>
        {dishes.map(dish => 
          (<Dish 
            key={dish.id} 
            name={dish.name} 
            description={dish.description} 
            image={dish.image} 
            price={dish.price}
          />))}
        
      </section>

    </div>
  );
}

export default App;
