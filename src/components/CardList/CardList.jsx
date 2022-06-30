import React, { useEffect } from 'react';
// import Card from '../Card/Card';
import PropTypes from 'prop-types';
import * as S from './CardList.style';
import axios from 'axios';
import axiosRetry from 'axios-retry';

function CardList() {
  // const [data, setData] = useState([]);
  axiosRetry(axios, { retries: 3 });

  // useEffect(() => {
  //   renderData();
  // }, []);

  // const fileterData = data.filter((items) => {
  //   if (category === 'All') {
  //     return items;
  //   }
  // //   return items.category === category;

  async function getData() {
    try {
      const response = await axios.get(
        'https://renewable-pc-games-data.p.rapidapi.com/games/1/',
        {
          headers: {
            'Content-type': 'application/json',
            'X-RapidAPI-Key':
              '8f5e336038mshcd06dae28b963c7p1b844ajsn7d8370c56522',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  });

  return (
    <S.Grid>
      {/* {data ? (
        category ? (
          fileterData.map((items) => (
            <Card key={items.id} items={items} category={category} />
          ))
        ) : (
          data.map((items) => (
            <Card key={items.id} items={items} category={category} />
          ))
        )
      ) : (
        <h1>Loading...</h1>
      )} */}
    </S.Grid>
  );
}

CardList.propTypes = {
  category: PropTypes.any,
};

export default CardList;
