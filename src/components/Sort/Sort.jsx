import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Sort.style';

const Sort = ({ getOptions }) => {
  const [select, setSelect] = useState('');
  getOptions(select);
  return (
    <S.Sort className='sort'>
      <form>
        <label>Sort By: </label>
        <select
          name='sort'
          id='sort'
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value='lowest'>Price (lowest)</option>
          <option value='highest'>Price (highest)</option>
          <option value='ascend'>name (a - z)</option>
          <option value='descend'>name (z - a)</option>
        </select>
      </form>
    </S.Sort>
  );
};

Sort.propTypes = {
  getOptions: PropTypes.func,
};

export default Sort;
