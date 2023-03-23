import { ComponentStory, ComponentMeta } from "@storybook/react";

import FancyProfilePic from "./fancy-profile-pic";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/FancyProfilePic",
  component: FancyProfilePic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FancyProfilePic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FancyProfilePic> = (args) => <FancyProfilePic {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
