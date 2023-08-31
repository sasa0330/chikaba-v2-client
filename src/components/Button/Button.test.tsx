import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/Button/Button";

describe("buttonコンポーネントのテスト", () => {
  it("表示する", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
  it("テキストがセットされてる場合、テキストがセットされたボタンを表示する", () => {
    render(<Button>送信</Button>);
    expect(screen.getByText("送信")).toBeTruthy();
  });
  it("関数がセットされている場合、ボタンをクリックすると関数が1回呼び出される", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn} />);
    userEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalled();
  });
  it("関数がセットされていない場合、ボタンをクリックしても関数が呼び出されない", () => {
    const mockFn = jest.fn();
    render(<Button />);
    userEvent.click(screen.getByRole("button"));
    expect(mockFn).not.toHaveBeenCalled();
  });
});
