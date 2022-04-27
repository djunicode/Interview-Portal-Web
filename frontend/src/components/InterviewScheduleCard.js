import { Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card1: {
    padding: "3%",
    height: "28vh",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
  divider: {
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));

const InterviewScheduleCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card1}>
      <Grid container className={classes.flexItem} rowSpacing="20">
        <Grid item>
          <Typography className={classes.header} variant="h3">
            Interview
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Not yet scheduled will notify you when it is scheduled
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InterviewScheduleCard;
