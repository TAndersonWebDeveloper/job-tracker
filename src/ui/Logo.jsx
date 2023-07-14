import { styled } from "styled-components";
import logo from "../../public/logo-light-mode.png";
import logoDarkMode from "../../public/logo-dark-mode.png";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div``;

const Logo = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const src = !isDarkMode ? logo : logoDarkMode;

  return (
    <StyledLogo>
      <img src={src} alt="" />
    </StyledLogo>
  );
};

export default Logo;
