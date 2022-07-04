import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px 10px #6c11b7;
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
  right: 11em;
  top: 1rem;

  @media screen and (min-width: 1440px) {
    top: 1vw;
  }
  @media screen and (min-width: 2560px) {
    right: 15rem;
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

  @media screen and (min-width: 1440px) {
    font-size: 0.8vw;
  }

  :hover {
    color: #6c11b7;
    transition: ease 0.3s;
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
