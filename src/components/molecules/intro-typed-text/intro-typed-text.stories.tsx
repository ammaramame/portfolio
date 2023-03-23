import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IntroTypedText from "./intro-typed-text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/IntroTypedText",
  component: IntroTypedText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof IntroTypedText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IntroTypedText> = (args) => <IntroTypedText {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
