import { styled } from "styled-components";

const SubHeading = styled.h4`
  font-size: 1.6rem;

  padding-bottom: 1.2rem;
`;

const DetailSubHeading = ({ value }) => {
  return <SubHeading>{value}</SubHeading>;
};

export default DetailSubHeading;
