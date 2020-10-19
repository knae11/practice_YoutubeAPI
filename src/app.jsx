import React from "react";
import { useState } from "react";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";

function App({ youtube }) {
  const [videos, setVidoes] = useState(youtube.mostPopular());

  return (
    <>
      <Header />
      <Videos videos={videos} />
    </>
  );
}

export default App;
