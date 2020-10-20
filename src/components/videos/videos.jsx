import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";
function Videos({ videos, onSelect }) {
  return (
    <ul className={styles.ul}>
      {videos.map((video) => (
        <Video key={video.id} onSelect={onSelect} video={video} />
      ))}
    </ul>
  );
}

export default Videos;
