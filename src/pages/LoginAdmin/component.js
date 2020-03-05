import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Copyright from "../../components/Elements/Copyright";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import FormLoginAdmin from "../../components/Form/FormLoginAdmin";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(29),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main
  },
  card: {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const component = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Paper elevation={2} className={classes.card} square={false}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Hello Admin!
          </Typography>
          <FormLoginAdmin />
          <Box mt={8}>
            <Copyright>Pet.In</Copyright>
          </Box>
        </Paper>
      </div>
    </Container>
  );
};

export default component;
