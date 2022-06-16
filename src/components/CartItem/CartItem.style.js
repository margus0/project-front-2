import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid white;

  button {
    padding: 1rem;
    margin: 0.5rem 1rem;
    height: fit-content;
  }

  input {
    height: 2rem;
    max-width: 3rem;
    text-align: center;
  }

  i {
    color: red;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 1rem;

    :hover {
      color: white;
    }
  }

  img {
    border: 1px solid white;
    height: 7rem;
    width: 10rem;
  }

  h3 {
    width: 10rem;
  }

  @media screen and (max-width: 880px) {
    display: block;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;

  @media screen and (max-width: 1041px) {
    h3 {
      font-size: medium;
    }

    @media screen and (max-width: 880px) {
      display: block;

      h3 {
        margin: 0.5rem auto;
      }
    }

    @media screen and (max-width: 500px) {
      img {
        height: 10rem;
        width: 10rem;
      }
    }

    @media screen and (max-width: 500px) {
      img {
        height: 8rem;
        width: 8rem;
      }
    }

    @media screen and (max-width: 500px) {
      h3 {
        font-size: small;
        width: 5rem;
      }
    }
  }
`;
