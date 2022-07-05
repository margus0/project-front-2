import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../utils/helper';
import { SearchResult, Search } from './SearchBar.styles';

const SearchBar = () => {
  const [data, setData] = useState('');
  const [filterData, setFilterData] = useState([]);
  let navigate = useNavigate();

  async function renderData() {
    const token = localStorage.getItem('token');
    const resp = await getData('auth/items', token);
    setData(resp.data);
  }

  const handleChange = (e) => {
    const inputData = e.target.value;
    const filterItems = data.filter((items) => {
      return items.name.toLowerCase().includes(inputData.toLowerCase());
    });

    if (inputData === '') {
      setFilterData([]);
    } else {
      setFilterData(filterItems);
    }
  };

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
      navigate('/auth/cart');
      return respInJs;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    renderData();
  }, []);

  return (
    <Search className='search'>
      <input type='text' onChange={handleChange} />
      <i className='fa fa-search' aria-hidden='true'></i>
      {filterData.length !== 0 && (
        <SearchResult className='searchResult'>
          {filterData &&
            filterData.map((items) => (
              <li onClick={() => insertToCart(items.id)} key={items.id}>
                {items.name}
              </li>
            ))}
        </SearchResult>
      )}
    </Search>
  );
};

export default SearchBar;
