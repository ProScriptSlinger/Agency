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
    title: "Kaax",
    desc: "An artificial intelligence system designed for the agricultural sector, currently in pilot testing phase. Interested companies can contact us to participate or learn more.",
    img: "/images/services/no-one-cares.jpg",
  },
  {
    title: "Hunab Hub",
    desc: "A visitor management system ideal for high-traffic areas such as condominiums and event venues, enhancing control and security.",
    img: "/images/services/hal-gatewood.jpg",
  },
  {
    title: "Kaax Analytics",
    desc: " A data analytics tool that provides detailed insights for accurate and informed decision-making.",
    img: "/images/services/path-digital.jpg",
  },
  {
    title: "IoT Implementation and Consulting",
    desc: " Offering both implementation and consulting services for Internet of Things (IoT) solutions to enable smart, connected environments for businesses.",
    img: "/images/services/shubham-dhage.jpg",
  },
  {
    title: "Blockchain Applications",
    desc: "Development of blockchain-based applications ensuring secure and transparent transactions across various fields.",
    img: "/images/services/thisisengineering.jpg",
  },
  {
    title: "Software Development (Native Mobile)",
    desc: "Design and development of custom mobile applications for iOS and Android operating systems, maximizing performance and features.",
    img: "/images/services/farzad.jpg",
  },
  {
    title: "UX/UI Design",
    desc: "User-focused design ensuring that digital products are intuitive, aesthetically pleasing, and easy to navigate.",
    img: "/images/services/ux-indonesia.jpg",
  },
  {
    title: "Consulting",
    desc: "Consulting services in technology and innovation to help companies implement effective digital solutions and improve processes.",
    img: "/images/services/luke-southern.jpg",
  },
  {
    title: "Technical Support",
    desc: "Technical assistance and maintenance for systems and software, ensuring continuous and efficient operations for your business.",
    img: "/images/services/christina-wocintechchat-com.jpg",
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
                  title={item.title}
                  desc={item.desc}
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
