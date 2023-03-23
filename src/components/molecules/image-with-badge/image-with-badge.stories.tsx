import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageWithBadge from "./image-with-badge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/ImageWithBadge",
  component: ImageWithBadge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  groundColor: { control: "color" },
} as ComponentMeta<typeof ImageWithBadge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageWithBadge> = (args) => <ImageWithBadge {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
