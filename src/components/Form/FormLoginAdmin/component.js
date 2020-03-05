import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormHelperText from "@material-ui/core/FormHelperText";
import loginContext from "../../../context/loginContext";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  buttonProgress: {
    color: "#fff",
    margin: theme.spacing(0.5, 0, 0.5)
  }
}));

const component = () => {
  const classes = useStyles();
  const [showPass, setShowPass] = useState(false);
  const loginContextes = useContext(loginContext);
  const loading = loginContextes.loading;
  const onSubmit = e => {
    e.preventDefault();
    loginContextes.setLoading();
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <form className={classes.form} onSubmit={e => onSubmit(e)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <OutlinedInput
              fullWidth
              autoComplete="email"
              autoFocus
              type="email"
              id="email"
              name="email"
              label="Email Address"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              fullWidth
              autoComplete="password"
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {loading ? (
          <CircularProgress size={28} className={classes.buttonProgress} />
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default component;
