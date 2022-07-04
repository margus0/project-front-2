import React, { useState } from 'react';
import * as S from '../Cart/Cart.style';
import CartList from '../../components/CartList/CartList';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Cart = () => {
  let navigate = useNavigate();
  const [cartTotal, seTcartTotal] = useState([]);
  const handleClick = () => {
    return navigate('/');
  };

  const totalPrice = async (data) => {
    let arr = [];
    let initVal = 0;
    await data.map((e) => arr.push(parseInt(e.price)));
    const total = arr.reduce((prev, curent) => curent + prev, initVal);
    return seTcartTotal(total);
  };

  return (
    <S.StyledPage>
      <>
        <Button type='button' color='primary' onClick={handleClick}>
          Go back
        </Button>
        <p className='total'>Total:{cartTotal}$</p>
        <CartList totalPrice={totalPrice} />
      </>
    </S.StyledPage>
  );
};

export default Cart;
