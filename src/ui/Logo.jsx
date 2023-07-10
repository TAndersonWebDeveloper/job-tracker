import { styled } from "styled-components";
import logo from "../../public/logo-light-mode.png";
const StyledLogo = styled.div``;

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="" />
    </StyledLogo>
  );
};

export default Logo;
