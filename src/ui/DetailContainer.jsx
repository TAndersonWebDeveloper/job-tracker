import { styled } from "styled-components";

const DetailContainer = styled.div`
  border-radius: var(--border-radius-sm);
  height: 50rem;
  display: flex;
  flex-direction: column;
`;

export const DetailHeader = styled.div`
  display: flex;
  padding: 1.6rem 2.4rem;
  justify-content: space-between;
  background-color: var(--color-blue-100);
  align-items: center;
  & div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  & svg {
    font-size: 3.2rem;
  }
`;

export const DetailBody = styled.div`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  border-top: none;
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
`;

export const IconSpan = styled.span`
  background-color: green;
  border-radius: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
  margin-top: 2.4rem;
`;

export default DetailContainer;
