import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExperienceLevelItem from "./experience-level-item";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/ExperienceLevelItem",
  component: ExperienceLevelItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ExperienceLevelItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExperienceLevelItem> = (args) => <ExperienceLevelItem {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
