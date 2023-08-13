import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    imgAttr: {
      src: "https://placehold.jp/150x150.png",
      alt: "テストalt",
    },
    contents: (
      <div>
        <div>テスト</div>
        <div>テスト</div>
      </div>
    ),
  },
};
