import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import * as S from './CardList.style';
import { getData } from '../../utils/helper';
import Sort from '../Sort/Sort';

function CardList({ category }) {
  const [data, setData] = useState([]);
  const [option, setOptions] = useState('lowest');

  async function renderData() {
    const token = localStorage.getItem('token');
    const resp = await getData('auth/items ', token);
    setData(resp.data);
  }

  useEffect(() => {
    renderData();
  }, []);

  const filteredData = data.filter((items) => {
    if (category === 'All') {
      return items;
    }
    return items.category === category;
  });

  const sortBy = (option, data) => {
    switch (option) {
      case 'ascend':
        return data.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase()
            ? -1
            : b.name.toLowerCase() > a.name.toLowerCase()
            ? 1
            : 0
        );
      case 'descend':
        return data.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase()
            ? -1
            : b.name.toLowerCase() < a.name.toLowerCase()
            ? 1
            : 0
        );
      case 'highest':
        return data.sort((a, b) => b.price - a.price);
      case 'lowest':
        return data.sort((a, b) => a.price - b.price);
      default:
        break;
    }
  };

  const getOptions = (option) => {
    return setOptions(option);
  };
  sortBy(option, data);

  return (
    <S.Grid>
      <Sort getOptions={getOptions} />
      {data ? (
        category ? (
          filteredData.map((items) => (
            <Card key={items.id} items={items} category={category} />
          ))
        ) : (
          data.map((items) => (
            <Card key={items.id} items={items} category={category} />
          ))
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </S.Grid>
  );
}

CardList.propTypes = {
  category: PropTypes.any,
};

export default CardList;
