/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner-thumb.jpg";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            "Frontend Developer"
          </Heading>
          <Text as="p" variant="heroSecondary">
            안녕하세요! 프론트엔드 개발자 이예담입니다.
            <br /> 이 곳은 제가 공부하며 만든 웹사이트 들을 소개하는 공간입니다.
            <br />
            클릭해서 구경해 보세요.
          </Text>
        </Box>

        {/* <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box> */}
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["230px", "200px", "200px", "220px", null, null, "190px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    mb: 8,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["30px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
