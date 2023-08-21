import { Component } from 'react';
import videos from '../videos.json';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';
import { VideoListWrapper, VideoTitle, TitleWrapper } from './App.styled';





export default class App extends Component {
  state = {
    selectedVideo: null,
    selectedVideoName: '',
  };


  selectVideo = (link, title) => {
    this.setState({selectedVideo: link, selectedVideoName: title})
}

  render () {
    const { selectedVideo } = this.state;
    return (
      <VideoListWrapper >
        <TitleWrapper>
          <VideoTitle>Selected video: { this.state.selectedVideoName }</VideoTitle>
        </TitleWrapper> 
        <VideoList videos={ videos } onSelect={ this.selectVideo } />
        {/* <Player url={ this.state.selectedVideo} /> */}
     </VideoListWrapper>
    )
  }
}