/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import { keyframes } from "@emotion/core";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import PriceCard from "components/price-card";
import ButtonGroup from "components/button-group";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PfThumb1 from "assets/project/joinus.png";
import PfThumb2 from "assets/project/Olrimpick.png";

const packages = {
  joinus: [
    {
      id: 1,
      img: PfThumb1,
      name: "조이너스",
      description: "사이드프로젝트 및 스터디 팀원을 모집하는 사이트",
      buttonText: "바로가기",
      siteLink: "https://joinus.store/",
    },
    {
      id: 2,
      name: "JOINUS",
      description: "8인 팀프로젝트 ",
      priceWithUnit: "원",
      buttonText: "GitHub",
      siteLink:
        "https://github.com/orgs/function-implementation-only/repositories",
      // anotherOption: "Or Start 14 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "개발인원 : 8명",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Frontend : React / Typescript / Redux",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Backend : Spring / MYSQL",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Deployment : AWS",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "영상",
      headerIcon: <IoIosCheckmarkCircle />,
      siteLink: "https://joinus.store/",
    },
  ],
  olrimpick: [
    {
      id: 1,
      img: PfThumb2,
      name: "근황올림픽",
      description: "서로의 근황을 묻고 나의 근황을 올리는 사이트",
      buttonText: "바로가기",
      siteLink: "https://olrimpick.netlify.app/",
    },
    {
      id: 2,
      name: "OLRIMPICK",
      description: "1인 개인프로젝트 ",
      priceWithUnit: "원",
      buttonText: "GitHub",
      siteLink: "https://github.com/leeyedam/Olrimpick_client",
      // anotherOption: "Or Start 14 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "개발인원 : 1명",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Frontend : React / Javascript / Redux",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Backend : Stream",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Deployment : Vercel",
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: "ID : user / PW: 123123",
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: "위에 둘러보기용 아이디와 로그인은 Signup이 아닌 Login으로 들어가주세요!",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "영상",
      headerIcon: <IoIosCheckmarkCircle />,
      siteLink: "https://olrimpick.netlify.app/",
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { joinus, olrimpick } = packages;
  const [state, setState] = useState({
    active: "joinus",
    pricingPlan: joinus,
  });

  const handlePricingPlan = (plan) => {
    if (plan === "olrimpick") {
      setState({
        ...state,
        active: "olrimpick",
        pricingPlan: olrimpick,
      });
    } else {
      setState({
        ...state,
        active: "joinus",
        pricingPlan: joinus,
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <section id="Project" sx={{ variant: "section.pricing" }}>
      <Container>
        <SectionHeader slogan="about" title="Project" />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === "joinus" ? "active" : ""}
              type="button"
              aria-label="joinus"
              onClick={() => handlePricingPlan("joinus")}
            >
              Joinus
            </button>
            <button
              className={state.active === "olrimpick" ? "active" : ""}
              type="button"
              aria-label="olrimpick"
              onClick={() => handlePricingPlan("olrimpick")}
            >
              Olrimpick
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box
                sx={styles.pricingItem}
                key={`${state.active}-card--key${packageData.id}`}
              >
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: "-80px",
    mt: "-40px",
    mx: -3,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      ".package__price": {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    ".carousel-container": {
      width: "100%",
      "> ul > li ": {
        display: "flex",
      },
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 auto",
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2,
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#23825a",
    button: {
      border: 0,
      width: "120px",
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#fff",
        backgroundColor: "#000",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
