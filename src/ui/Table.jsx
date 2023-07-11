/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { styled } from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  border-bottom: none;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 1.6rem;
  align-items: center;
`;
const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-200);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  height: 5.4rem;
  &:not(last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }

  &:hover {
    background-color: var(--color-grey-200);
    cursor: pointer;
  }
`;

const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  border: 1px solid var(--color-grey-200);
`;

const StyledBody = styled.section``;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledRow columns={columns}>{children}</StyledRow>;
}

function Body({ data, render }) {
  if (!data.length) {
    return <NoData>No Jobs match that critera</NoData>;
  }
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
