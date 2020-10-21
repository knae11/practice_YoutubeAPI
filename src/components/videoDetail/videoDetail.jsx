import React from "react";
import styles from "./videoDetail.module.css";
function VideoDetail({ selectedVideo, selectedVideo: { snippet } }) {
  return (
    <section className={styles.detail}>
      <iframe
        title="youtube video player"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h3>{snippet.title}</h3>
      <h4>{snippet.channelTitle}</h4>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
}

export default VideoDetail;
