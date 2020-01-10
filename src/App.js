import React from "react";
import APIErrorProvider from "./common/providers/APIErrorProvider";
import APIErrorNotification from "./components/APIErrorNotification";
import HomePage from "./features/HomePage";

function App() {
  return (
    <APIErrorProvider>
      <HomePage />
      {/* routing, feature components, etc */}
      <APIErrorNotification />
    </APIErrorProvider>
  );
}

export default App;
