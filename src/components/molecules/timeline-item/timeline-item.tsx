import { FunctionComponent } from "react";

interface TimelineItemProps {
  time: string;
  place: string;
  title: string;
  description?: string;
  icon: any;
}

const TimelineItem: FunctionComponent<TimelineItemProps> = (props) => {
  const { icon, place, time, title, description } = props;

  const Icon = icon;

  return (
    <div className="uk-flex uk-flex-nowrap">
      {Icon && (
        <div className="uk-flex uk-flex-column uk-flex-center uk-margin-small-right">
          <div className="uk-background-primary uk-inline-block uk-border-circle uk-flex uk-flex-middle uk-flex-center uk-light" style={{ width: 35, height: 35 }}>
            <Icon size={18} />
          </div>
          <hr className="uk-divider-vertical uk-margin-remove-vertical" />
        </div>
      )}

      <div>
        <div className="uk-text-bold uk-badge uk-background-muted uk-text-emphasis uk-padding-small letter-spacing-1" style={{ fontSize: 12 }}>
          {time}
        </div>

        <div className=" uk-flex uk-flex-middle" style={{ fontSize: 17, marginTop: 8 }}>
          <span className="uk-text-bold">{title}</span>
          {/* <span style={{ paddingInline: 4 }}></span> */}
          <hr className="uk-divider-small" style={{ width: 10, paddingInline: 8 }} />
          <span className="uk-text-muted ">{place}</span>
        </div>

        <div style={{ maxWidth: 600, marginTop: 8 }}>
          <span className="uk-text-default">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
