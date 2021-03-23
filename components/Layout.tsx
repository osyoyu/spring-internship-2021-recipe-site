/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/react";

import { Header } from "./Header";

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
