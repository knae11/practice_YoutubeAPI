import React from "react";
import styles from "./video.module.css";
function Video({ video }) {
  return (
    <>
      <img
        className={styles.image}
        src={video.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className={styles.card}>
        <h3 className={styles.title}>{video.title}</h3>
        <h5 className={styles.channel}>{video.channelTitle}</h5>
      </div>
    </>
  );
}

export default Video;
