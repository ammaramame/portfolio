import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TimelineItemsList from "./timeline-items-list";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/TimelineItemsList",
  component: TimelineItemsList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TimelineItemsList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TimelineItemsList> = (args) => <TimelineItemsList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
