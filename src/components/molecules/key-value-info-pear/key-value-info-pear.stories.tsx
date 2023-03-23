import { ComponentStory, ComponentMeta } from "@storybook/react";

import KeyValueInfoPear from "./key-value-info-pear";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/KeyValueInfoPear",
  component: KeyValueInfoPear,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof KeyValueInfoPear>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KeyValueInfoPear> = (args) => <KeyValueInfoPear {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Title",
  value: "Value",
};
