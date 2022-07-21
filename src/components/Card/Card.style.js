import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  padding: 1rem;
  text-align: center;
  color: white;
  position: relative;
  min-height: 25vw;
  font-size: 1rem;

  h4 {
    width: 20rem;
    margin: 1rem auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  img {
    border: 1px solid white;
    height: 12vw;
    width: 18vw;
  }

  button {
    position: relative;
    width: 40%;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 80vw;
    font-size: 2vw;
    margin: 5rem auto;
    height: 50vw;

    img {
      height: 23vw;
      width: 40vw;
      min-height: 6rem;
      min-width: 6rem;
    }
  }

  .description {
    animation: 2s anim-lineUp ease-out;
    margin: 2vw auto;
    font-size: 1.2rem;
    @keyframes anim-lineUp {
      0% {
        opacity: 0;
        transform: translateY(80%);
      }
      20% {
        opacity: 0;
      }
      50% {
        opacity: 1;
        transform: translateY(0%);
      }
      100% {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 2.5vw;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1vw;
  }
`;
