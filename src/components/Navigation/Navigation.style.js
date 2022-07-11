import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 5px 5px #6c11b7;
    background-color: #6c11b7;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.1vw;
  }
`;

export const DropNav = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10rem;
  top: 1vw;
  background-color: #000000de;
  padding: 0;

  @media screen and (max-width: 1920px) {
    left: 7rem;
  }

  @media screen and (min-width: 1920px) {
    left: 8rem;
  }

  @media screen and (min-width: 1000px) {
    #logout {
      display: none;
    }
  }
`;

export const DropList = styled.li`
  color: white;
  list-style: none;
  font-size: 0.75rem;
  cursor: pointer;
  line-height: 2vw;
  padding: 0 2vw;

  &:hover {
    background-color: #6c11b7;
    transition: ease 0.2s;
  }

  @media screen and (min-width: 1440px) {
    font-size: 0.8vw;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 6rem;
  background-color: '#6C11B7';
`;
