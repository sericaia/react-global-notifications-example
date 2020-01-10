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

  return <div>Will render some data</div>;
}

export default HomePage;
