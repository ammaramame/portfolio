import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButtonTextContainer from "./icon-button-text-container";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/IconButtonTextContainer",
  component: IconButtonTextContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof IconButtonTextContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButtonTextContainer> = (args) => <IconButtonTextContainer {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
