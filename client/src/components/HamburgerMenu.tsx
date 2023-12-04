import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  setIsHamburgerOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenuSVG = styled.svg`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerMenu = ({setIsHamburgerOpen} : HeaderProps) => {

  const handleHamburgerMenu = () => {
    setIsHamburgerOpen((prevState) => !prevState);
  };

  return (
    <HamburgerMenuSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      onClick={handleHamburgerMenu}
    >
      <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
    </HamburgerMenuSVG>
  );
};
