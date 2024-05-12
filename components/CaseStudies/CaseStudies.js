import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ScrollAnimation from "react-scroll-animation-wrapper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import imgApi from "~/public/images/imgAPI";
import CaseCard from "../Cards/Case";
import useStyles from "./case-study-style";
import useTitle from "../Title/title-style";

const categories = [
  "Smart City IoT Implementation",
  "Predictive Maintenance AI",
  "Blockchain Supply Chain",
  "Web Development Redesign",
  "Mobile App Gamification",
];
const caseData = [
  {
    bg: "/images/studies/blockchain.jpg",
    logo: "/images/Isotipo_v4.png",
    title: "Blockchain Supply Chain",
    desc: "",
    size: "small",
    simple: false,
  },
  {
    bg: "/images/studies/redesign.jpg",
    logo: "/images/Isotipo_v4.png",
    title: "Web Development Redesign",
    desc: "Enhance user experience and boost conversions through website redesign.",
    size: "medium",
  },
  {
    bg: "/images/studies/gamification.jpg",
    logo: "/images/lIsotipo_v4.png",
    title: "Mobile App Gamification",
    desc: "Motivate users with gamified fitness app for health goals.",
    size: "medium",
  },
  {
    bg: "/images/studies/city.jpg",
    logo: "/images/Isotipo_v4.png",
    title: "Smart City IoT Implementation",
    desc: "Optimize energy use and enhance services with IoT sensors in smart cities.",
    size: "big",
  },
  {
    bg: "/images/studies/ai.jpg",
    logo: "/images/Isotipo_v4.png",
    title: "Predictive Maintenance AI",
    desc: "Reduce downtime and costs with AI-based predictive maintenance.",
    size: "big",
  },
];

function CaseStudies() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  // Translation Function
  const { t } = useTranslation("common");

  // Image Gallery
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  const [selectedIndex, setSelectedIndex] = useState("corporate");

  function handleListItemClick(event, index) {
    console.log(index);
    setSelectedIndex(index);
  }

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + caseData.length - 1) % caseData.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + caseData.length + 1) % caseData.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  const renderCard = (item, index) => (
    <CaseCard
      key={index.toString()}
      bg={item.bg || ""}
      logo={item.logo}
      title={item.title}
      desc={item.desc}
      size={item.size}
      simple={item.simple || false}
      openPopup={() => showPopup(index)}
    />
  );

  return (
    <div className={classes.root}>
      {open && (
        <Lightbox
          mainSrc={caseData[photoIndex].bg || caseData[photoIndex].logo}
          nextSrc={
            caseData[(photoIndex + 1) % caseData.length].bg ||
            caseData[(photoIndex + 1) % caseData.length].logo
          }
          prevSrc={caseData[(photoIndex + 1) % caseData.length].logo || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container fixed={isDesktop}>
        <Grid container spacing={6}>
          <Grid item md={3} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={-100}
              delay={200}
              duration={0.3}
            >
              <div>
                <Typography variant="h4" className={title.primary}>
                  {t("agency-landing.case_title")}
                </Typography>
                <List component="nav">
                  {categories.map((item, index) => (
                    <ListItem
                      button
                      key={index.toString()}
                      className={cx(
                        classes.filter,
                        selectedIndex === item && classes.active
                      )}
                      onClick={(event) => handleListItemClick(event, item)}
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={9} xs={12}>
            <div className={classes.massonry}>
              <Grid container spacing={3}>
                <Grid item sm={3}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={200}
                    duration={0.4}
                  >
                    <div>
                      {caseData.map((item, index) => {
                        if (item.size === "small") {
                          return renderCard(item, index);
                        }
                        return false;
                      })}
                    </div>
                  </ScrollAnimation>
                </Grid>
                <Grid item sm={4}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={400}
                    duration={0.4}
                  >
                    <div>
                      {caseData.map((item, index) => {
                        if (item.size === "medium") {
                          return renderCard(item, index);
                        }
                        return false;
                      })}
                    </div>
                  </ScrollAnimation>
                </Grid>
                <Grid item sm={5}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={600}
                    duration={0.4}
                  >
                    <div>
                      {caseData.map((item, index) => {
                        if (item.size === "big") {
                          return renderCard(item, index);
                        }
                        return false;
                      })}
                    </div>
                  </ScrollAnimation>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CaseStudies;
