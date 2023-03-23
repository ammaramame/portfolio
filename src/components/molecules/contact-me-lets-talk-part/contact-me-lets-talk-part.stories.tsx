import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContactMeLetsTalkPart from "./contact-me-lets-talk-part";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/ContactMeLetsTalkPart",
  component: ContactMeLetsTalkPart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ContactMeLetsTalkPart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContactMeLetsTalkPart> = (args) => <ContactMeLetsTalkPart {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
