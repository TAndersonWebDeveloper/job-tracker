import { styled } from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);
  height: 6.4rem;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  span {
    font-size: 1.4rem;
    color: var(--color-grey-400);
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      {/* <span>Certain CRUD operations disabled in demo mode</span> */}
      <DarkModeToggle />
    </StyledHeader>
  );
};

export default Header;
