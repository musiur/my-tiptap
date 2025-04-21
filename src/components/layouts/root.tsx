import { Fragment } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navbar.Root />
      <main className="min-h-screen">{children}</main>
      <Footer.Root />
    </Fragment>
  );
};
