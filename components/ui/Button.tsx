import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

type PropType = {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
};

const Button: React.FC<PropType> = (props) => {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
