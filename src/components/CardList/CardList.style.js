import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: white;
  gap: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  top: 20vw;
  text-align: center;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    top: 20vh;
  }

  @media screen and (max-width: 426px) {
    padding: 0;
  }
`;
