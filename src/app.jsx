import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";
import styles from "./app.module.css";
import VideoDetail from "./components/videoDetail/videoDetail";
function App({ youtube }) {
  //youtube에서 videos 값을 array 로 받을 거니까 []로 셋팅! 아니면 promise가 옵니다.
  const [videos, setVidoes] = useState([]);
  const [selected, setSelected] = useState(null);
  const onSelect = (video) => {
    setSelected(video);
  };
  const onSearch = (searchvalue) => {
    youtube
      .search(searchvalue) //
      .then((videos) => setVidoes(videos));
  };

  //useEffect 안에 넣어주어야 하는 이유? 마운트가 되거나, 업데이트 될때 해야 되니까!
  //useEffect안에 안넣으면 렌더링 될때마다 불려서 계~~~속 api 불려져ㅠㅠ
  //받아온 것을 setVideos에 까지 넣어주자!
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVidoes(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Header onSearch={onSearch} />
      {selected && <VideoDetail selectedVideo={selected} />}
      <Videos onSelect={onSelect} videos={videos} />
    </div>
  );
}

export default App;
