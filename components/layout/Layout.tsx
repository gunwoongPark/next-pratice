import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

type PropType = {
  children: React.ReactNode;
};

const Layout: React.FC<PropType> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
