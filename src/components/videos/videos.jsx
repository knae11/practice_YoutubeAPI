import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";
function Videos({ videos }) {
  console.log(videos);
  return (
    <ul className={styles.ul}>
      {videos.map((video) => (
        <li className={styles.li} key={video.id}>
          <Video video={video.snippet} />
        </li>
      ))}
    </ul>
  );
}

export default Videos;
