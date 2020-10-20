import React from "react";
import styles from "./video.module.css";
function Video({ video, video: { snippet }, onSelect }) {
  //event에 대한걸 가져오는게 아니고 그냥 클릭된 video의 정보를 가져오면됨!
  const handleSelect = () => {
    onSelect(video);
  };
  return (
    <li className={styles.li} key={video.id} onClick={handleSelect}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className={styles.card}>
          <h3 className={styles.title}>{snippet.title}</h3>
          <h5 className={styles.channel}>{snippet.channelTitle}</h5>
        </div>
      </div>
    </li>
  );
}

export default Video;
