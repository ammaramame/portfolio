import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ParticlesBackground from "./particles-background";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/ParticlesBackground",
  component: ParticlesBackground,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ParticlesBackground>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ParticlesBackground> = (args) => <ParticlesBackground {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
