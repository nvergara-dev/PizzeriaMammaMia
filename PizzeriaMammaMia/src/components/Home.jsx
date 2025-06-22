import { useEffect, useState } from 'react'
//import {pizzas} from '../pizzas'
import CardPizza from './CardPizza'
//import CartList from './CartList'
import Header from './Header'

const Home = () => {
  const [pizzas,setPizzas] = useState([])
  const getPizzas =  async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    console.log(data)
    setPizzas(Array.isArray(data) ? data : data.pizzas || [])
  } 

  useEffect(() =>{
    getPizzas()
  },[])
  return (
    <div>
        <Header/> 
        <div className="row m-3">
        {
          pizzas.map((pizza) => (
              <CardPizza
              id={pizza.id}
              nombre={pizza.name}
              precio={pizza.price}
              ingredientes={pizza.ingredients}
              imagen={pizza.img}
              />           
            )
          )
        }
        </div>
        {/*<CartList/>*/}        
    </div>
  )
}

export default Home
