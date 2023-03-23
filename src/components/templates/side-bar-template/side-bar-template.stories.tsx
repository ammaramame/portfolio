import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SideBarTemplate from "./side-bar-template";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "templates/SideBarTemplate",
  component: SideBarTemplate,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SideBarTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideBarTemplate> = (args) => <SideBarTemplate {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  firstItem: "first",
  secondItem: "second",
  lastItem: "last",
  mainList: ["1", "2", "3"],
  show: true,
  onLastItemHide: action("lastItemHide"),
  removeOnHide: true,
  animate: "top",
};
