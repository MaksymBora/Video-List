import {
  VideoRenderList,
  VideoRenderItem,
  PreviewImg,
} from './VideoList.styled';

export const VideoList = ({ videos, onSelect }) => {
  return (
    <VideoRenderList>
      {videos.map(video => (
        <VideoRenderItem
          key={video.id}
          onClick={() => onSelect(video.link, video.title)}
        >
          {/* {video.title} */}
          <PreviewImg src={video.preview} alt={video.title} />
        </VideoRenderItem>
      ))}
    </VideoRenderList>
  );
};
