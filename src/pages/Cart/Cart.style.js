import styled from 'styled-components';

export const StyledPage = styled.div`
  button {
    position: relative;
    top: 7rem;
    left: 5vw;
  }

  p.total {
    font-size: 1rem;
    position: relative;
    top: 9rem;
    left: 5vw;
    margin: 0 auto;

    @media screen and (min-width: 1440px) {
      font-size: 1.1vw;
    }

    @media screen and (min-width: 2560px) {
      left: 8rem;
    }
  }
`;
