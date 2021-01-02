import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("component render without errors", () => {
  const { queryByTestId } = render(<App />);
  const rootDom = queryByTestId("component-app");
  expect(rootDom).toBeInTheDocument();
});
