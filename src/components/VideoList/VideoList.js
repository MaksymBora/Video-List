import { Videos } from 'components/VideoModal/VideoModal';
import { VideoRenderList, VideoRenderItem } from './VideoList.styled';

export const VideoList = ({ videos, onSelect, selectedVideo }) => {
  return (
    <VideoRenderList>
      {videos.map(video => (
        <VideoRenderItem
          key={video.id}
          onClick={() => onSelect(video.link, video.title)}
        >
          <Videos item={video} />
        </VideoRenderItem>
      ))}
    </VideoRenderList>
  );
};
