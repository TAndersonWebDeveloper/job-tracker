import { styled } from "styled-components";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Button from "./Button";

const StyledSearch = styled.input`
  //   outline: none;
  background: transparent;
  border: none;
`;

const StyledSearchContainer = styled.div`
  border: 1px solid var(--color-grey-100);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  display: flex;
  background-color: var(--color-grey-0);
  align-items: center;
  height: 100%;
  padding: 0.6rem;
  position: relative;
`;

const StyledButton = styled.div`
  height: 100%;
  position: absolute;
  button {
    height: 100%;
  }

  svg {
    font-size: 1.6rem;
  }

  top: 0;
  right: 0;
`;

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <StyledSearchContainer>
        <StyledSearch />
        <StyledButton>
          <Button variation="primary" size="small">
            <HiOutlineSearch />
          </Button>
        </StyledButton>
      </StyledSearchContainer>
    </>
  );
};

export default Search;
