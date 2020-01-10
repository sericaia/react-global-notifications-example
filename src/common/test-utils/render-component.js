import React from "react";
import { render } from "@testing-library/react";

import { APIErrorContext } from "../providers/APIErrorProvider";

// Mocks
const errorMock = null;

export default function renderComponent(
  children,
  {
    // ... other props
    error = errorMock
  } = {}
) {
  const addErrorSpy = jest.fn();
  const removeErrorSpy = jest.fn();

  return {
    ...render(
      // add other providers such as AuthContext
      <APIErrorContext.Provider
        value={{
          error,
          addError: addErrorSpy,
          removeError: removeErrorSpy
        }}
      >
        {children}
      </APIErrorContext.Provider>
    ),
    addErrorSpy,
    removeErrorSpy
  };
}
