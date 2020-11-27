import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Renders content properly", () => {
  render(<App />);
  const appTitle = screen.getByText("TO DO LIST");
  const todoForm = screen.getByTestId("test-form");

  expect(appTitle).toBeInTheDocument();
  expect(todoForm).toBeInTheDocument();
});

test("User can add and delete todos into/from the list", () => {
  render(<App />);
  // Add todos
  const input = screen.getByLabelText("To do:");
  fireEvent.change(input, { target: { value: "1st to do" } });
  fireEvent.click(screen.getByText("Submit"));
  fireEvent.change(input, { target: { value: "2nd to do" } });
  fireEvent.click(screen.getByText("Submit"));
  fireEvent.change(input, { target: { value: "3rd to do" } });
  fireEvent.click(screen.getByText("Submit"));
  // Check todos have been added
  const firstTodo = screen.getByText("1st to do");
  const secondTodo = screen.getByText("2nd to do");
  const thirdTodo = screen.getByText("3rd to do");
  expect(firstTodo).toBeInTheDocument();
  expect(secondTodo).toBeInTheDocument();
  expect(thirdTodo).toBeInTheDocument();
  // Check user con delete todos
  fireEvent.click(screen.getByTestId("1st to do - delete"));
  expect(firstTodo).not.toBeInTheDocument();
  // Check other todos still exist
  expect(secondTodo).toBeInTheDocument();
  expect(thirdTodo).toBeInTheDocument();
});
