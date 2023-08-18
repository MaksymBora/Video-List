import React, { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  render() {
    const { url } = this.props;

    return (
      <>
        {url && (
          <PlayerWrapper>
            <StyledPlayer url={url} controls />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
