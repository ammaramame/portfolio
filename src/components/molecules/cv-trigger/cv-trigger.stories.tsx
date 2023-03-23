import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CvTrigger from "./cv-trigger";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/CvTrigger",
  component: CvTrigger,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CvTrigger>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CvTrigger> = (args) => <CvTrigger {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
