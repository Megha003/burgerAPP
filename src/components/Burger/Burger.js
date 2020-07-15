import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = ( props ) => {
   return(
     <div className="Burger">
         <BurgerIngredients type = "bread-top"/>
         <BurgerIngredients type = "ceat"/>
         <BurgerIngredients type = "cheese"/>
         <BurgerIngredients type = "bread-bottom"/>      
     </div>  
   );
};

export default Burger;