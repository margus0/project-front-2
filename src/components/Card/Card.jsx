import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as S from './Card.style';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function Card({ items }) {
  let navigate = useNavigate();
  const [error, setError] = useState();
  const insertToCart = async (id) => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_URL}/auth/cart/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer: ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      const respInJs = await resp.json();
      respInJs.id ? navigate('/auth/cart') : setError(respInJs.err);
      return respInJs;
    } catch (error) {
      return error;
    }
  };

  return (
    <S.Card>
      {error && <span style={{ color: 'green' }}>{error}</span>}
      <div>
        <img src={items.img} alt={items.name} />
      </div>
      <div>
        <h3 key={items.id}>{items.name}</h3>
        <p>{items.category}</p>
        <p>{items.price + '$'}</p>
      </div>

      <Button
        type='submit'
        color='primary'
        onClick={() => insertToCart(items.id)}
      >
        buy
      </Button>
    </S.Card>
  );
}

Card.propTypes = {
  items: propTypes.any,
};

export default Card;
