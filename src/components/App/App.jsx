/* Please refer to https://developers.google.com/youtube/player_parameters for usage */
import React from 'react';
import YouTubeIframeLoader from 'youtube-iframe';

import {
  Container,
  PlayerContainer,
  ProgressBar,
  ControlsContainer,
  Button,
  Timer,
} from './App.styles';

class App extends React.Component {
  state = {
    currentTime: '0:00',
    duration: '0:00',
    playing: false,
    progressBar: 0,
    videoVisible: true,
  };

  componentWillMount() {
    YouTubeIframeLoader.load((YT) => {
      this.player = new YT.Player('video-placeholder', {
        width: 640,
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
          autoplay: this.state.playing ? 1 : 0,
          controls: 0,
          rel: 0,
        },
        events: {
          onReady: this.handleOnReady,
          onStateChange: this.handleOnStateChange,
        },
      });
    });
  }

  handleOnReady = () => {
    this.updateTimerDisplay();
    this.updateProgressBar();

    clearInterval(this.timerUpdateInterval);
    this.timerUpdateInterval = setInterval(() => {
      this.updateTimerDisplay();
      this.updateProgressBar();
    }, 1000);
  }

  handleOnStateChange = (event) => {
    /*
      STATES:
        1 -> playing
        2 -> paused
        3 -> buffering
    */
    const playing = event.data === 1 || event.data === 3;
    if (playing !== this.state.playing) this.setState({ playing });
  }

  handleProgressBarSeek = (event) => {
    const newTime = this.player.getDuration() * (event.target.value / 100);
    this.player.seekTo(newTime);
  }

  formatTime = (time) => {
    const formattedTime = Math.round(time);
    const minutes = Math.floor(formattedTime / 60);
    let seconds = formattedTime - minutes * 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  }

  updateTimerDisplay = () => {
    this.setState({
      currentTime: this.formatTime(this.player.getCurrentTime()),
      duration: this.formatTime(this.player.getDuration()),
    });
  };

  updateProgressBar = () => {
    this.setState({
      progressBar: (this.player.getCurrentTime() / this.player.getDuration()) * 100,
    });
  };

  togglePlayPause = () => {
    if (this.state.playing) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
    this.setState(prevState => ({ playing: !prevState.playing }));
  }

  toggleVisible = () => {
    this.setState(prevState => ({ videoVisible: !prevState.videoVisible }));
  }

  render = () => (
    <Container className="App">
      <PlayerContainer visible={this.state.videoVisible}>
        <div id="video-placeholder" />
      </PlayerContainer>
      <ProgressBar
        onClick={this.handleProgressBarSeek}
        value={this.state.progressBar}
      />
      <ControlsContainer>
        <Timer>
          <div>{this.state.currentTime}</div>&nbsp;/&nbsp;<div>{this.state.duration}</div>
        </Timer>
        <Button
          className={`fa fas fa-${this.state.playing ? 'pause' : 'play'} fa-2x`}
          onClick={this.togglePlayPause}
        />
        <Button className="fa far fa-eye fa-2x" onClick={this.toggleVisible} />
      </ControlsContainer>
    </Container>
  );
}

export default App;
