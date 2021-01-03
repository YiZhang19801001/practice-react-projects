import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

afterEach(() => {
  cleanup();
});

test("component render without errors", () => {
  const { queryByTestId } = screen;
  const rootDom = queryByTestId("component-app");
  expect(rootDom).toBeInTheDocument();
});

test("show counter div when component render", () => {
  const { queryByTestId } = screen;
  const counterDiv = queryByTestId("div-counter");
  expect(counterDiv).toBeInTheDocument();
});
test("show button increase when component render", () => {
  const { queryByTestId } = screen;
  const increaseBtn = queryByTestId("increase-button");
  expect(increaseBtn).toBeInTheDocument();
});

test("show button decrease when component render", () => {
  const { queryByTestId } = screen;
  const decreaseBtn = queryByTestId("decrease-button");
  expect(decreaseBtn).toBeInTheDocument();
});

test("counter is intialized as 0", () => {
  const { queryByTestId } = screen;
  const counterDiv = queryByTestId("div-counter");
  expect(counterDiv).toHaveTextContent("0");
});

test("when click increase button, counter increase by 1", () => {
  const { queryByTestId } = screen;
  const increaseBtn = queryByTestId("increase-button");
  const counterDiv = queryByTestId("div-counter");
  fireEvent.click(increaseBtn);

  expect(counterDiv).toHaveTextContent("1");
});

test("when click decrease button, counter decrease by 1", () => {
  const { queryByTestId } = screen;
  const increaseBtn = queryByTestId("increase-button");
  const decreaseBtn = queryByTestId("decrease-button");

  const counterDiv = queryByTestId("div-counter");
  fireEvent.click(increaseBtn);
  fireEvent.click(increaseBtn);
  fireEvent.click(increaseBtn);

  fireEvent.click(decreaseBtn);

  expect(counterDiv).toHaveTextContent("2");
});

test("counter will not be negtive number", () => {
  const { queryByTestId } = screen;
  const decreaseBtn = queryByTestId("decrease-button");
  const counterDiv = queryByTestId("div-counter");
  fireEvent.click(decreaseBtn);

  expect(counterDiv).toHaveTextContent("0");
});
