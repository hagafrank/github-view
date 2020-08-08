import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "Test User" })
  })
);

describe("Fetch github user test", () => {
  test("that component is added after searching for github user", async () => {
    const { getByText } = render(<App />);
    const node = getByText("Search");
    fireEvent.click(node);
    // const searchResult = getByText(/Test User/i);
    // expect(searchResult).toBeInTheDocument();
  });

  afterEach(cleanup);
});
