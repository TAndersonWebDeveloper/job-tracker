import { styled } from "styled-components";
import { SkillValues } from "../services/SkillValues";

const Skill = styled.div`
  background-color: ${(props) => props.color};
`;

const SkillName = styled.span`
  font-size: 1.4rem;
`;

const SkillItem = ({ skill, color }) => {
  return (
    <Skill
      color={
        SkillValues[skill] ? SkillValues[skill].color : "var(--color-grey-200)"
      }
    >
      <SkillName>{skill}</SkillName>
    </Skill>
  );
};

export default SkillItem;
