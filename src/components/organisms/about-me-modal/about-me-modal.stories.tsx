import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutMeModal from "./about-me-modal";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "organisms/AboutMeModal",
  component: AboutMeModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AboutMeModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutMeModal> = (args) => <AboutMeModal {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  open: false,
  onClose: action("on Close"),
};
