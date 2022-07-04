import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid white;
  min-height: 10vw;
  font-size: 1.1vw;

  img {
    border: 1px solid white;
    height: 10vw;
    width: 15vw;
  }

  i {
    color: red;
    font-size: 2vw;
    cursor: pointer;
    margin: 1rem;

    :hover {
      color: white;
    }
  }

  h4,
  p {
    width: 20vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;

    i {
      font-size: 1.5rem;
    }

    h4,
    p {
      font-size: 2vw;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      height: 20vw;
      width: 30vw;
      min-height: 6rem;
      min-width: 6rem;
    }
  }

  @media screen and (max-width: 425px) {
    h4,
    p {
      font-size: 3vw;
    }

    gap: 0;
    i {
      font-size: 5vw;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10vw;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
