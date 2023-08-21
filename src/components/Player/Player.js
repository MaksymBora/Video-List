import React, { Component } from 'react';
import { Triangle } from 'react-loader-spinner';
import { PlayerWrapper, StyledPlayer, Spinner } from './Player.styled';

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
    const playerSize = isVideoLoaded ? '100%' : 0;
    return (
      <>
        {url && !isVideoLoaded && (
          <Spinner>
            <Triangle
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{ margin: 'auto' }}
              wrapperClassName="spinner"
              visible={true}
            />
          </Spinner>
        )}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
