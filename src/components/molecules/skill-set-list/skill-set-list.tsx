import { FunctionComponent } from "react";
import ExperienceLevelItem from "../experience-level-item/experience-level-item";

import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import profileConfig from "../../../configs/profile";

interface SkillSetListProps {
  fullView?: boolean;
  columnsNumber?: number | string;
  animationDelay?: number;
}

const SkillSetList: FunctionComponent<SkillSetListProps> = (props) => {
  const { fullView, columnsNumber, animationDelay } = props;

  const { skill_set } = profileConfig;

  skill_set?.sort((a, b) => a.priorty - b.priorty);

  const filterdData = fullView ? skill_set : skill_set?.slice(0, 6);

  return (
    <div uk-grid="">
      {filterdData?.map((item, index) => (
        <div
          className={`uk-width-1-1 uk-width-1-2@s uk-width-1-${columnsNumber}@m uk-display-inline-block ${animationDelay ? "animate__animated animate__fadeInUp  animate__faster" : ""}`}
          key={item.title}
          style={{ ...(animationDelay ? generateAnimationDelayStyle(index * 0.3 + animationDelay) : {}) }}
        >
          <ExperienceLevelItem icon={item.icon} title={item.title} value={item.value} />
        </div>
      ))}
    </div>
  );
};

export default SkillSetList;

SkillSetList.defaultProps = {
  columnsNumber: 2,
};
