import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModeSwitchers from "./mode-switchers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/ModeSwitchers",
  component: ModeSwitchers,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ModeSwitchers>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModeSwitchers> = (args) => <ModeSwitchers {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
