import React, { useEffect } from "react";
import useAPIError from "../../common/hooks/useAPIError";
import { getData } from "../../common/api";

function HomePage() {
  const { addError } = useAPIError();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();

        // do something useful with the data
      } catch (err) {
        addError(`LOAD_DATA_ERROR: ${err}`, err.response);
      }
    };

    fetchData();
  }, [addError]);

  return (
    <div>
      Will throw and error from a fake API call 2 seconds after the component
      mounts
    </div>
  );
}

export default HomePage;
