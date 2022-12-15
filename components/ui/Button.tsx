import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

type PropType = {
  children: React.ReactNode;
  link: string;
};

const Button: React.FC<PropType> = (props) => {
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
};

export default Button;
