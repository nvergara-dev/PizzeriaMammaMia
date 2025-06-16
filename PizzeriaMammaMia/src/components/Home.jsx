import {pizzas} from '../pizzas'
import CardPizza from './CardPizza'
import CartList from './CartList';
import Header from './Header'



const Home = () => {


  return (
    <div>
        <Header/> 
        <div className="row m-3">
        {
          pizzas.map((pizza) => (
              <CardPizza
              nombre={pizza.name}
              precio={pizza.price}
              ingredientes={pizza.ingredients}
              imagen={pizza.img}
              />           
            )
          )
        }
        </div>
        <CartList/>        
    </div>
  );
}

export default Home
