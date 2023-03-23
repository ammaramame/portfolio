import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ValueTitleSection from "./value-title-section";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/ValueTitleSection",
  component: ValueTitleSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ValueTitleSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ValueTitleSection> = (args) => <ValueTitleSection {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
