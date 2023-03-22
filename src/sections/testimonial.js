/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";
import Link from "next/link";

import Modu from "assets/project/modu.png";
import Watchout from "assets/project/watchout.png";
import Github from "assets/project/github.png";
import Pokedex from "assets/project/pokedex.png";

const data = [
  {
    id: 1,
    title: "MODU",
    description:
      "각 나라의 수도의 현재 날씨와 시간별 날씨, 습도, 바람 등 한꺼번에 모아서 볼 수 있는 웹사이트 입니다.",
    skills: "React / Zustand / Axios / MUI",
    git: "GITHUB 소스 보러가기",
    gitLink: "https://github.com/leeyedam/Modu_project1",
    siteLink: "https://modu-project1.vercel.app/",
    img: Modu,
  },
  {
    id: 2,
    title: "WATCHOUT PEDIA",
    description:
      "최근 개봉작 / 인기 상영작 등 영화와 TV프로그램을 검색할 수 있는 사이트입니다. ReactQuery를 활용해서 API연동으로 받아온 데이터를 웹사이트에 적용하는 법을 공부하였고, Emotion을 활용하여 스타일링 하는 부분을 배웠습니다. 클론코딩으로 제작된 사이트입니다.",
    skills: "React / ReactQuery / Emotion",
    git: "GITHUB 소스 보러가기",
    gitLink: "https://github.com/leeyedam/react-watchout-pedia",
    siteLink: "https://react-watchout-pedia.vercel.app/",
    img: Watchout,
  },
  {
    id: 3,
    title: "GITHUB SEARCH ENGINE",
    description:
      "Github API를 활용하여 깃헙 사용자 리스트와 사용자의 상세정보와 리퍼지토리 조회를 구현했습니다. Zustand 상태관리 라이브러리를 활용하여 상태관리를 하였고, MUI를 활용하여 UI를 표현했습니다. 배포는 Firebase를 사용했습니다. 클론코딩으로 제작된 사이트입니다.",
    skills: "React / Zustand / MUI / Axios / Firebase",
    siteLink: "https://yedam-github-search-engine.web.app/",
    img: Github,
  },
  {
    id: 4,
    title: "POKEDEX",
    description:
      "포켓몬의 종류와 각각의 포켓몬의 진화과정,기술 등 상세설명이 담긴 웹사이트입니다. ReactQuery를 활용해서 API연동으로 받아온 데이터를 웹사이트에 적용하는 법을 공부하였고, Emotion을 활용하여 스타일링 하는 부분을 배웠습니다. 클론코딩으로 제작된 사이트입니다.",
    git: "GITHUB 소스 보러가기",
    gitLink: "https://github.com/leeyedam/pokedex-playground",
    siteLink: "https://pokedex-playground.vercel.app/",
    img: Pokedex,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const handleOpenNewTab = (url) => {
  window.open(url, "_blank", "noopener, noreferrer");
};

export default function TestimonialCard() {
  return (
    <section id="SmallProject" sx={{ variant: "section.testimonial" }}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader slogan="Study" title="Small Project & Clone Coding" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box
              sx={styles.reviewCard}
              key={`testimonial--key${item.id}`}
              onClick={() => handleOpenNewTab(item.siteLink)}
            >
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <Text sx={styles.description}>{item.skills}</Text>
              <Text sx={styles.description}>
                <a href={item.gitLink} target="_blank">
                  {item.git}
                </a>
              </Text>
              <div className="card-footer">
                <Image src={item.img} alt="Client Image" />
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    height: "700px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    cursor: "pointer",
    height: "586px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "gray",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "primary",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 3],
    fontWeight: 700,
    mb: [3, null, null, "18px"],
    color: "text_secondary",
    lineHeight: 1.2,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
    a: {
      textDecoration: "none",
      color: "#ccc",
      fontWeight: "700",
    },
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
