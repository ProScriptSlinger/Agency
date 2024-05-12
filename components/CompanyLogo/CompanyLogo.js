import React from "react";
import useStyles from "./logo-style";

const logos = ["/images/Imagotipo_v4.png"];

function CompanyLogo() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt={"logo" + index.toString()}
            key={index.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyLogo;
