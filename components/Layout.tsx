import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Header/>
      <main>{children}</main>
    </>
  );
}

export default Layout;
