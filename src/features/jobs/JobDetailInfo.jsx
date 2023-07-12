import ExtraInfoContainer from "../../ui/ExtraInfoContainer";

import { SkillsContainer } from "../../ui/DetailContainer";
import SkillItem from "../../ui/SkillItem";
import DetailSubHeading from "../../ui/DetailSubHeading";
import { SkillValues } from "../../services/SkillValues";

const JobDetailInfo = ({ job }) => {
  return (
    <ExtraInfoContainer>
      <DetailSubHeading value="Listed Required Skills" />
      <SkillsContainer>
        <SkillItem skill="react" />
        <SkillItem skill="typescript" />
        <SkillItem skill="mysql" />
        <SkillItem skill="node" />
      </SkillsContainer>
    </ExtraInfoContainer>
  );
};

export default JobDetailInfo;
