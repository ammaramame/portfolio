import { FunctionComponent } from "react";

interface TimelineItemProps {
  time: string;
  place: string;
  title: string;
  description_list?: string[];
  icon: any;
}

const TimelineItem: FunctionComponent<TimelineItemProps> = (props) => {
  const { icon, place, time, title, description_list } = props;

  const Icon = icon;

  return (
    <div className="uk-flex uk-flex-nowrap">
      {Icon && (
        <div className="uk-flex uk-flex-column  uk-margin-small-right">
          <div className="uk-background-primary uk-inline-block uk-border-circle uk-flex uk-flex-middle uk-flex-center uk-light" style={{ width: 35, height: 35, flexShrink: 0 }}>
            <Icon size={18} />
          </div>
          <hr className="uk-divider-vertical uk-margin-remove-vertical" style={{ height: "100%" }} />
        </div>
      )}

      <div>
        <div className="uk-text-bold uk-badge uk-background-muted uk-text-emphasis uk-padding-small letter-spacing-1" style={{ fontSize: 12 }}>
          {time}
        </div>

        <div className=" uk-flex uk-flex-middle" style={{ fontSize: 17, marginTop: 8 }}>
          <span className="uk-text-bold">{title}</span>

          <hr className="uk-divider-small" style={{ width: 10, paddingInline: 8 }} />
          <span className="uk-text-muted ">{place}</span>
        </div>

        <div style={{ maxWidth: 600, marginTop: 8 }}>
          {description_list?.map((item) => (
            <div key={item} className="uk-text-default">
              - {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
