import styled from 'styled-components';

export const Sort = styled.div`
  position: absolute;
  font-size: 1rem;
  top: -6vw;
  left: 3vw;

  @media screen and (min-width: 1000px) {
    font-size: 1.1vw;
  }
  @media screen and (max-width: 768px) {
    top: 2vw;
  }
`;
