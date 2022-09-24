import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {

   console.log("this is the basket >>>", basket);

  const [basket, dispatch] = useStateValue();
  const addToBasket = () =>  {
      //Dispatch the item into the data layer

      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });

  };

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className=' '>
                <small>zar</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (
                     <p>*</p>
                ))}
               
            </div>
        </div>
            <img src={image} alt=''/>
            <button type='button' onClick={addToBasket}>Add to Basket</button>

    </div>
  )
}

export default Product