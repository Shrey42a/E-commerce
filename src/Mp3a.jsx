import React, { Component } from "react";
import song from "./RTK3.mp3";

class Mp3a extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="flex flex-col justify-center p-2 mt-4 space-y-4 border border-black mb-9 bg9">
        <p className="text-lg font-bold text-center text-white">
          {this.state.isPlaying ? "Song is Playing" : "Song is Paused"}
        </p>
        <div className="flex justify-center">
        <button
          className="w-1/2 h-12 text-lg font-bold text-white bg10 btnn"
          onClick={this.playPause}
        >
          Play | Pause
        </button></div>
      </div>
    );
  }
}
export default Mp3a;
