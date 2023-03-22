/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";

export default function FeatureCardColumn({
  src,
  altText = "default alt text",
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
      <Image src={src} alt={altText} sx={styles.img} />
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    textAlign: ["center", null, "center"],
    px: [4, null, 6],
    borderRadius: "20px",
    border: "1px solid #ffffff33",
  },
  img: {
    mx: ["auto", null, 0],
    ml: ["auto", null, null],
    mb: 2,
    width: ["auto", null, null, "auto", null, "auto"],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: 4,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
      mt: [3, null, 4],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};
