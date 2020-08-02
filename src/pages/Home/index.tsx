import React from "react";

import { translate, intl } from "i18n/ConfiguredIntlProvider";

import Menu from "components/core/Menu";
import BannerMain from "components/core/BannerMain";
import Carousel from "components/core/Carousel";
import Footer from "components/core/Footer";
import { Category } from "components/core/Carousel";

const buildCategory = (index: number, numVideos: number): Category => ({
  title: translate({ id: `categories${index}.title` }),
  link: !intl.messages[`categories${index}.link`]
    ? undefined
    : translate({ id: `categories${index}.link` }),
  color: translate({ id: `categories${index}.color` }),
  extra_link: !intl.messages[`categories${index}.extra_link.text`]
    ? undefined
    : {
        text: translate({ id: `categories${index}.extra_link.text` }),
        url: translate({ id: `categories${index}.extra_link.url` }),
      },
  videos: [...Array(numVideos).keys()].map((_, videoIndex) => ({
    title: translate({ id: `categories${index}.videos${videoIndex}.title` }),
    url: translate({ id: `categories${index}.videos${videoIndex}.url` }),
  })),
});

const Home = () => {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={translate({ id: "categories0.videos0.title" })}
        url={translate({ id: "categories0.videos0.url" })}
        videoDescription={translate({ id: "categories0.videos0.description" })}
      />

      <Carousel ignoreFirstVideo category={buildCategory(0, 8)} />

      <Carousel category={buildCategory(1, 5)} />

      <Carousel category={buildCategory(2, 4)} />

      <Carousel category={buildCategory(3, 4)} />

      <Carousel category={buildCategory(4, 5)} />

      <Carousel category={buildCategory(5, 5)} />

      <Footer />
    </div>
  );
};

export default Home;
