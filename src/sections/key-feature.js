/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Frontend from "assets/key-feature/frontend.png";
import Tools from "assets/key-feature/tools.png";
import Deployment from "assets/key-feature/deployment.png";

const data = [
  {
    id: 1,
    title: "Frontend",
    imgSrc: Frontend,
    altText: "Partnership deal",
  },
  {
    id: 2,
    title: "Tools",
    imgSrc: Tools,
  },
  {
    id: 3,
    title: "Deployment",
    imgSrc: Deployment,
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="Skills">
      <Container>
        <SectionHeader slogan="My" title="Skills" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              title={item.title}
              src={item.imgSrc}
              alt={item.altText}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
