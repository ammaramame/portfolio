import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TypedText from "./typed-text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/TypedText",
  component: TypedText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TypedText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TypedText> = (args) => <TypedText {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  contents: ["Hello", "This Is Test", "Of Typed Text"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 700,
  loop: true,
};
