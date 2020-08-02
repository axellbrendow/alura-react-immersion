import React from "react";

import * as S from "./styles";

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

interface VideoCardProps {
  videoTitle: string;
  videoURL: string;
  categoryColor: string;
}

function VideoCard({ videoTitle, videoURL, categoryColor }: VideoCardProps) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;

  return (
    <S.VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || "red" }}
      title={videoTitle}
    />
  );
}

export default VideoCard;
