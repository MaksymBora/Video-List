import React, { Component } from 'react';
import RingLoader from 'react-spinners/ClipLoader';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;

    return (
      <>
        {url && !isVideoLoaded && (
          <RingLoader
            color="#36d7b7"
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
