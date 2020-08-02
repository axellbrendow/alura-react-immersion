import React from "react";

import * as S from "./styles";

interface YouTubeIframeResponsiveProps {
  youtubeID: string;
}

function YouTubeIframeResponsive({ youtubeID }: YouTubeIframeResponsiveProps) {
  return (
    <S.VideoContainer>
      <S.ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </S.VideoContainer>
  );
}

export default YouTubeIframeResponsive;
