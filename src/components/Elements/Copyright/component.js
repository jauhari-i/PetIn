import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const component = props => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        {props.children}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default component;
