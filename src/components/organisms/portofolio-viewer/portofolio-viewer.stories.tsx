import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PortofolioViewer from "./portofolio-viewer";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "organisms/PortofolioViewer",
  component: PortofolioViewer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PortofolioViewer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PortofolioViewer> = (args) => <PortofolioViewer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = { open: false, onClose: action("after closed") };
