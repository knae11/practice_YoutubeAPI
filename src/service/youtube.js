class Youtube {
  constructor(key) {
    this.key = key;
    this.base = "https://www.googleapis.com/youtube/";
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const response = await fetch(
      `${this.base}v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.requestOptions
    );
    const result = await response.json();
    return result.items;
  }
  search() {
    fetch(
      `${this.base}v3/search?part=snippet&maxResults=25&q=bts&type=video&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result));
  }
}

export default Youtube;
