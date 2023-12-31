import { Component } from 'react';
import videos from '../videos.json';
import { VideoList } from './VideoList/VideoList';
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

    return (
      <VideoListWrapper >
        <TitleWrapper>
          <VideoTitle>Selected video: { this.state.selectedVideoName }</VideoTitle>
        </TitleWrapper> 
        <VideoList videos={ videos } onSelect={ this.selectVideo } />
     </VideoListWrapper>
    )
  }
}