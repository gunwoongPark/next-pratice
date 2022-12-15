import React from "react";
import classes from "./ErrorAlert.module.css";

type PropType = {
  children: React.ReactNode;
};

const ErrorAlert: React.FC<PropType> = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
