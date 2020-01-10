import React from "react";
import { fireEvent } from "react-testing-library";
import renderComponent from "../../common/test-utils/render-component";
import APIErrorNotification from "./";

it("should remove error when handleSubmit is pressed", () => {
  const ERROR_MESSAGE = "SOME_ERROR";
  const { getByTestId, removeErrorSpy } = renderComponent(
    <APIErrorNotification />,
    {
      error: {
        message: ERROR_MESSAGE
      }
    }
  );

  const submitModalBtn = getByTestId("notification-submit-button");
  fireEvent.click(submitModalBtn);

  expect(removeErrorSpy).toHaveBeenCalled();
});
