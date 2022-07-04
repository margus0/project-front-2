import React from 'react';
import propTypes from 'prop-types';
import * as S from './CartItem.style';

function CartItem({ items, reload }) {
  const deleteItem = async (id) => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_URL}/auth/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      const respInJs = await resp.json();
      reload();
      return respInJs;
    } catch (error) {
      return error;
    }
  };

  return (
    <S.Card>
      <img src={items.image} alt={items.name} />
      <S.Div>
        <h4 key={items.id}>{items.name}</h4>
        <p>{items.price + '$'}</p>
      </S.Div>
      <i className='fa fa-trash' onClick={() => deleteItem(items.id)}></i>
    </S.Card>
  );
}

CartItem.propTypes = {
  items: propTypes.any,
  reload: propTypes.func,
};

export default CartItem;
