import { styled } from "styled-components";
import { SkillValues } from "../services/SkillValues";

const Skill = styled.div`
  //   background-color: ${(props) => props.color};
  width: fit-content;
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-sm);
  border: 3px solid ${(props) => props.color};
`;

const SkillName = styled.span`
  font-size: 1.4rem;
`;

const SkillItem = ({ skill, color }) => {
  const str = skill;

  return (
    <Skill
      color={
        SkillValues[skill] ? SkillValues[skill].color : "var(--color-grey-200)"
      }
    >
      <SkillName>{str.charAt(0)?.toUpperCase() + str.slice(1)}</SkillName>
    </Skill>
  );
};

export default SkillItem;
