import React from 'react';
import './shopping-cart.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import ProductContext from "../../shared/products-context";

interface ShoppingProps {
   handleClose: React.FC;
}

interface Product {
   id: number;
   picUrl: string;
   title: string;
   price: number;
}

export const ShoppingCart = (props: ShoppingProps) => {

   const productContext = React.useContext(ProductContext);

   const [shoppingClosed, setShoppingClosed] = React.useState<boolean>(false);

   const shoppingCart = React.useRef<HTMLDivElement>();

   const handleClose = () => {

      !shoppingClosed? shoppingCart.current.classList.add('closed'): shoppingCart.current.classList.remove('closed');
      
      setShoppingClosed(!shoppingClosed);
      
      props.handleClose();
   }

   const ShoppingList = () => {
      console.log(productContext.productList);

      const list = [];

      const removeProduct = (ordenador: Product) => {
         let products: Product[] = productContext.productList? [...productContext.productList]: [];
         products = products.filter(product => product.id !== ordenador.id);
         productContext.setProductList(products);
      }

      if(productContext.productList) {

         let total = 0;
         for(const product of productContext.productList) {

            total = total + product.price;

            list.push(
               <div className="shopping-item">
                  <img src={product.picUrl} alt="Product"/>
                  <h1>{product.title}</h1>
                  <p>{product.price}€</p>
                  <div className="remove-icon" onClick={e => removeProduct(product)}>
                     <RemoveShoppingCartIcon />
                  </div>
               </div>
            )
         }
         list.push(<div className="shopping-total">TOTAL : {total}€</div>)
      }

      return <>{list}</>;
   }

   return <div className="shopping-cart-container">
            <div className="icon">
               {!shoppingClosed? 
                 <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose}/>
                :<FontAwesomeIcon icon={faCartShopping} onClick={handleClose}/>
               }
            </div>
            <div ref={shoppingCart} className="shopping-cart">
               <ShoppingList/>
            </div>
          </div>;
}