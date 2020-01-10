import React from "react";
import { fireEvent, wait, cleanup } from "@testing-library/react";
import renderComponent from "../../common/test-utils/render-component";
import APIErrorNotification from "./";

describe("<APIErrorNotification />", () => {
  afterEach(cleanup);

  it("should remove error when handleSubmit is pressed", async () => {
    const ERROR_MESSAGE = "SOME_ERROR";
    const { getByTestId, removeErrorSpy } = renderComponent(
      <APIErrorNotification />,
      {
        error: {
          message: ERROR_MESSAGE
        }
      }
    );

    wait(() => {
      const submitModalBtn = getByTestId("notification-submit-button");
      fireEvent.click(submitModalBtn);

      expect(removeErrorSpy).toHaveBeenCalled();
    });
  });

  it("should not show modal when handleSubmit is pressed", async () => {
    const ERROR_MESSAGE = "SOME_ERROR";
    const { getByTestId, queryByTestId } = renderComponent(
      <APIErrorNotification />,
      {
        error: {
          message: ERROR_MESSAGE
        }
      }
    );

    wait(() => {
      const submitModalBtn = getByTestId("notification-submit-button");
      fireEvent.click(submitModalBtn);

      const modal = queryByTestId("notification-modal");
      expect(modal).toBeNull();
    });
  });
});
