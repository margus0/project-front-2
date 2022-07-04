import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgb(189, 189, 189);
  color: white;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  max-height: 100%;
  min-height: 20vw;
  position: relative;
  text-align: center;
  top: 10rem;
  width: 90vw;

  input {
    height: 2.5vw;
  }

  h1 {
    margin-top: 10vw;
  }

  @media screen and (max-width: 880px) {
    h1 {
      font-size: large;
    }
  }
`;
