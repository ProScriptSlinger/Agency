import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStyles from "./cards-style";

function Services(props) {
  const { classes } = useStyles();
  const { img, title, desc, button } = props;
  return (
    <Paper className={classes.defaultCard}>
      <figure
        style={{
          background: `url(${img}) center/100% no-repeat`,
        }}
      />
      <div className={`${classes.text}`}>
        <Typography display="block" variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography component="p">{desc}</Typography>
      </div>
      {/* <Button
        variant="outlined"
        fullWidth
        color="primary"
        className={classes.button}
      >
        {button}
      </Button> */}
    </Paper>
  );
}

Services.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default Services;
