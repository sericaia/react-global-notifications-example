import React from "react";
import useAPIError from "../../common/hooks/useAPIError";
import { Modal } from "@material-ui/core";

function APIErrorNotification() {
  const { error, removeError } = useAPIError();

  const handleSubmit = () => {
    removeError();
  };

  return (
    <Modal
      open={!!error}
      style={{ marginTop: "2em" }}
      data-testid="notification-modal"
    >
      <div>
        {error && error.message && <p>({error.message})</p>}
        <button data-testid="notification-submit-button" onClick={handleSubmit}>
          Ok
        </button>
      </div>
    </Modal>
  );
}

export default APIErrorNotification;
