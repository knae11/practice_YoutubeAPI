import React from "react";
import Video from "../video/video";

function Videos({ videos }) {
  console.log(videos);
  return (
    <ul>
      {/* {videos.map((video) => (
        <li>
          <Video video={video} />
        </li>
      ))} */}
    </ul>
  );
}

export default Videos;
