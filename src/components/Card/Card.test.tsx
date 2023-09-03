import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Card } from "@/components/Card/Card";

const ImageData = {
  src: "https://placehold.jp/150x150.png",
  alt: "ダミー画像",
};

describe("cardコンポーネントのテスト", () => {
  it("表示する", () => {
    render(<Card imgAttr={ImageData} contents={"テストコンテンツ"} />);
    expect(screen.getByTestId("card")).toBeTruthy();
    expect(screen.getByRole("img")).toBeTruthy();
    expect(screen.getByText("テストコンテンツ")).toBeInTheDocument();
  });
  it("コンテンツがない場合 表示する", () => {
    render(<Card imgAttr={ImageData} />);
    expect(screen.getByTestId("card")).toBeTruthy();
    expect(screen.getByRole("img")).toBeTruthy();
    expect(screen.queryByText("テストコンテンツ")).not.toBeInTheDocument();
  });
});
