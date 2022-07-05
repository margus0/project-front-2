import styled from 'styled-components';

export const Search = styled.div`
  input {
    padding: 0.5vw;
    width: 20vw;
    font-size: 1vw;
  }
  i {
    position: relative;
    left: -2rem;
    color: initial;
    font-size: 1.5vw;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  color: initial;
  background-color: white;
  height: 100px;
  margin-top: 1vh;
  width: 300px;
  overflow: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  li {
    font-size: 0.8vw;
    padding: 1vw 0 1vw 0.5vw;
    cursor: pointer;

    :hover {
      background-color: lightgray;
      transition: ease-in 0.2s;
    }
  }
`;
