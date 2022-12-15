import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    height: 100,
    background: "red",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <p>I am a header </p>
    </div>
  );
};

export default Header;
