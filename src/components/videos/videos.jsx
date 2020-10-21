import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";
function Videos({ videos, onSelect, display }) {
  return (
    <ul className={styles.ul}>
      {videos.map((video) => (
        <Video
          key={video.id}
          onSelect={onSelect}
          video={video}
          display={display}
        />
      ))}
    </ul>
  );
}

export default Videos;
