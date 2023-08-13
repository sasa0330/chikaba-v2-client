import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "./Loading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Loading",
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
