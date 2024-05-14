import React, { useEffect, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Carousel from "react-slick";
import PrevIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "next-i18next";
import imgApi from "~/public/images/imgAPI";
import useStyles from "./services-style";
import TitleIcon from "../Title/WithIcon";
import Card from "../Cards/Default";
import DotsParallax from "../Parallax/Dots";

const servicesList = [
  {
    title: "agency-landing.services_tech_title",
    desc: "agency-landing.services_tech_desc",
    img: "/images/services/christina-wocintechchat-com.jpg",
  },
  {
    title: "agency-landing.services_consulting_title",
    desc: "agency-landing.services_consulting_desc",
    img: "/images/services/luke-southern.jpg",
  },
  {
    title: "agency-landing.services_ux_title",
    desc: "agency-landing.services_ux_desc",
    img: "/images/services/ux-indonesia.jpg",
  },
  {
    title: "agency-landing.services_native_title",
    desc: "agency-landing.services_native_desc",
    img: "/images/services/farzad.jpg",
  },
  {
    title: "agency-landing.services_blockchain_title",
    desc: "agency-landing.services_blockchain_desc",
    img: "/images/services/shubham-dhage.jpg",
  },
  {
    title: "agency-landing.services_iot_title",
    desc: "agency-landing.services_iot_desc",
    img: "/images/services/thisisengineering.jpg",
  },
  {
    title: "agency-landing.services_anlytics_title",
    desc: "agency-landing.services_anlytics_desc",
    img: "/images/services/path-digital.jpg",
  },
  {
    title: "agency-landing.services_hunab_title",
    desc: "agency-landing.services_hunab_desc",
    img: "/images/services/hal-gatewood.jpg",
  },
  {
    title: "agency-landing.services_kaax_title",
    desc: "agency-landing.services_kaax_desc",
    img: "/images/services/no-one-cares.jpg",
  },
];

function Services() {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { classes } = useStyles();
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (theme.direction === "ltr" && window.innerWidth > 1200) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(servicesList.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <DotsParallax />
      <div className={classes.carouselHandle}>
        <div className={classes.carouselWrap}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
            {servicesList.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <Card
                  title={t(item.title)}
                  desc={t(item.desc)}
                  img={item.img}
                  button={t("agency-landing.services_button")}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon
              text={t("agency-landing.services_title")}
              icon="apps"
              extended
            />
            <nav className={classes.arrow}>
              <Fab
                size="small"
                onClick={() => slider.current.slickNext()}
                aria-label="prev"
                className={classes.margin}
              >
                <PrevIcon />
              </Fab>
              <Fab
                size="small"
                onClick={() => slider.current.slickPrev()}
                aria-label="next"
                className={classes.margin}
              >
                <NextIcon />
              </Fab>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Services;
