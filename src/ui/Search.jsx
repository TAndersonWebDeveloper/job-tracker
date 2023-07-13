import { styled } from "styled-components";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Button from "./Button";
import { useJobs } from "../features/jobs/useJobs";
import { useSearchParams } from "react-router-dom";

const StyledSearch = styled.input`
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
  const [searchParams, setSearchParams] = useSearchParams();
  const { jobs, isLoading, isError } = useJobs();

  function handleClick() {
    searchParams.set("search", search);
    setSearchParams(searchParams);
  }

  return (
    <>
      <StyledSearchContainer>
        <StyledSearch onChange={(e) => setSearch(e.target.value)} />
        <StyledButton>
          <Button variation="primary" size="small" onClick={handleClick}>
            <HiOutlineSearch />
          </Button>
        </StyledButton>
      </StyledSearchContainer>
    </>
  );
};

export default Search;
