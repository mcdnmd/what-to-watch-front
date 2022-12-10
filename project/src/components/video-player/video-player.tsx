import {useEffect, useRef} from 'react';
import {Film} from '../../types/film';

type Props = {
  film: Film;
  isPlaying: boolean;
  isMuted: boolean;
  width: number;
  height: number;
}

function VideoPlayer(props: Props): JSX.Element {
  const {film, isPlaying, isMuted, width, height} = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if(videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video ref={videoRef} src={film.videoLink} poster={film.posterImage} muted={isMuted} width={width} height={height}></video>
  );
}

export default VideoPlayer;
