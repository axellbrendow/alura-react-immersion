import React from "react";

import VideoIframeResponsive from "./components/VideoIframeResponsive";

import * as S from "./styles";

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

interface BannerMainProps {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}: BannerMainProps) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <S.BannerMainContainer backgroundImage={bgUrl}>
      <S.ContentAreaContainer>
        <S.ContentAreaContainerItem>
          <S.ContentAreaContainerTitle>
            {videoTitle}
          </S.ContentAreaContainerTitle>

          <S.ContentAreaContainerDescription>
            {videoDescription}
          </S.ContentAreaContainerDescription>
        </S.ContentAreaContainerItem>

        <S.ContentAreaContainerItem>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <S.WatchButton>Assistir</S.WatchButton>
        </S.ContentAreaContainerItem>
      </S.ContentAreaContainer>
    </S.BannerMainContainer>
    // <div>BannerMain</div>
  );
}
