/* Please refer to https://developers.google.com/youtube/player_parameters for usage */
import React from 'react';
import YouTubeIframeLoader from 'youtube-iframe';
import 'assets/stylesheets/App.css';

class App extends React.Component {
  componentWillMount() {
    YouTubeIframeLoader.load(YT => (
      new YT.Player('video-placeholder', {
        width: 640,
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
        },
      })
    ));
  }

  render = () => (
    <div className="App">
      <div id="video-placeholder" />
    </div>
  );
}

export default App;
