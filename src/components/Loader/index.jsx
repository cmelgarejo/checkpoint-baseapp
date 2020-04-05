import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import loaderStyle from "assets/jss/material-dashboard-pro-react/views/loaderStyle.jsx";

const Loader = ({ classes, t, error, retry, message }) => {
  if (error) {
    return (
      <GridContainer
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <GridItem item xs={6}>
          {t(`errorMessage`)}
          <Button onClick={retry}>{t("Retry")}></Button>
        </GridItem>
      </GridContainer>
    );
  }

  return (
    <GridContainer
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <GridItem item xs={12}>
        <CircularProgress size={144} />
      </GridItem>
      <GridItem item xs={12}>
        <h5>{message && t("nowLoading")}</h5>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(loaderStyle)(Loader);
