import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile/profile";
import TimelineItem from "../timeline-item/timeline-item";

interface TimeLineItemsListProps {
  type: "experince" | "education";
}

const TimeLineItemsList: FunctionComponent<TimeLineItemsListProps> = (props) => {
  const { type } = props;

  const { education, experince } = profileConfig;

  const flow = type === "experince" ? experince : education;

  return (
    <>
      {flow.map((item) => (
        <div key={`${item.title}-${item.place}`} className="uk-margin uk-margin-remove-adjacent">
          <TimelineItem {...item} />
        </div>
      ))}
    </>
  );
};

export default TimeLineItemsList;
