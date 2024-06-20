import React, { useRef, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Carousel from "react-slick";
import { useTranslation } from "next-i18next";
import TestimonialCard from "../Cards/Testimonial";
import TitleIcon from "../Title/WithIcon";
import CompanyLogo from "../CompanyLogo";
import SquareParallax from "../Parallax/SingleSquare";
import imgAPI from "~/public/images/imgAPI";
import useStyle from "./testi-style";

const testiContent = [
  {
    text: "En Ahau-X, fusionamos tradición agrícola y tecnología para llevar la producción a nuevas alturas.",
    avatar: imgAPI.avatar[0],
    name: "Claudia Gómez",
    title: "CEO",
    rating: 0,
  },
  {
    text: "Artificial intelligence is invaluable, enhancing efficiency and effectiveness across all sectors.",
    avatar: imgAPI.avatar[1],
    name: "Esteban Rivas",
    title: "COO",
    rating: 0,
  },
  {
    text: "I am delighted to recognize the Hunab and Kaax platform for their great ideas. ",
    avatar: imgAPI.avatar[2],
    name: "Abel Tony",
    title: "Developer",
    rating: 0,
  },
];

function Testimonials() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { classes } = useStyle();

  // Carousel Setting
  const settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  // Translation function
  const { t } = useTranslation("common");

  // Carousel
  const slider = useRef(null);
  useEffect(() => {
    if (theme.direction === "ltr" && window.innerWidth > 1279) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(testiContent.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <SquareParallax />
      <div className={classes.carousel}>
        <Carousel ref={slider} {...settings}>
          {isDesktop && (
            <div className={classes.item}>
              <div className={classes.itemPropsFirst} />
            </div>
          )}
          {testiContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <TestimonialCard
                avatar={item.avatar}
                title={item.title}
                name={item.name}
                text={item.text}
                star={item.rating}
              />
            </div>
          ))}
          {isDesktop && (
            <div className={classes.item}>
              <div className={classes.itemPropsLast} />
            </div>
          )}
        </Carousel>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon
              text={t("agency-landing.testimonial_title")}
              icon="format_quote"
            />
          </div>
        </Container>
      </div>
      <CompanyLogo />
    </div>
  );
}

export default Testimonials;
