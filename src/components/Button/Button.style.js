import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) =>
    props.color === 'primary' ? '#6C11B7' : 'black'};
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
  color: ${(props) => (props.color === 'primary' ? 'white' : 'red')};
  cursor: pointer;
  font-size: 1.1vw;
  font-weight: bold;
  padding: 0.75vw 2vw;
  text-transform: capitalize;
  margin: 0.5vh 0;

  :hover {
    background: ${(props) => (props.color === 'primary' ? 'white' : 'red  ')};
    color: ${(props) => (props.color === 'primary' ? '#6C11B7' : 'black')};
    transition: ease 0.2s;
  }

  @media screen and (max-width: 1440px) {
    font-size: 1rem;
    padding: 0.75rem 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2vh;
    padding: 2vh 4vh;
  }

  @media screen and (max-width: 768px) {
    padding: 2vw 4vw;
  }
`;
