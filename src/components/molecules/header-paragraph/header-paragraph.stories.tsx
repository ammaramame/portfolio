import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderParagraph from "./header-paragraph";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/HeaderParagraph",
  component: HeaderParagraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof HeaderParagraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderParagraph> = (args) => <HeaderParagraph {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: "What is my skill level?",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.",
};
