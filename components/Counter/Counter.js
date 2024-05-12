import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import useStyles from "./counter-style";

import { FiHeart } from "react-icons/fi"; //Passion Icon
import { BiTargetLock } from "react-icons/bi"; //Determination Icon
import { BiRecycle } from "react-icons/bi"; //Substainabilaty Icon
import { TfiPalette } from "react-icons/tfi"; //Creativity Icon
import { BiGroup } from "react-icons/bi"; //Teamwork Icon

function Counter() {
  const { t } = useTranslation("common");
  const { classes } = useStyles();
  const { classes: text } = useText();
  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid
          container
          justify-content="center"
          alignItems="center"
          spacing={6}
        >
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  <FiHeart />
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t("agency-landing.about_passion")}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  <BiTargetLock />
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t("agency-landing.about_determination")}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  <BiRecycle />
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t("agency-landing.about_sustainability")}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={6} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  <TfiPalette />
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t("agency-landing.about_creativity")}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={6} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  <BiGroup />
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t("agency-landing.about_teamwork")}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
