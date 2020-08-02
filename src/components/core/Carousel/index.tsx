import React from "react";

import VideoCard from "./components/VideoCard";

import * as S from "./styles";

interface Video {
  title: string;
  url: string;
  description?: string;
}

export interface Category {
  title: string;
  link?: string;
  color: string;
  extra_link?: {
    url: string;
    text: string;
  };
  videos: Video[];
}

interface CarouselProps {
  ignoreFirstVideo?: boolean;
  category: Category;
}

function Carousel({ ignoreFirstVideo, category }: CarouselProps) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.extra_link;
  const videos = category.videos;

  return (
    <S.CarouselContainer>
      {categoryTitle && (
        <>
          <S.Title style={{ backgroundColor: categoryColor || "red" }}>
            {categoryTitle}
          </S.Title>
          {categoryExtraLink && (
            <S.ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </S.ExtraLink>
          )}
        </>
      )}
      <S.VideoCardList>
        {videos.map((video, index) =>
          ignoreFirstVideo && index === 0 ? null : (
            <li key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          )
        )}
      </S.VideoCardList>
    </S.CarouselContainer>
  );
}

export default Carousel;
