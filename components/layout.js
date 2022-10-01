import Head from "next/head";
import HeaderNav from "./HeaderNav";

export default function Layout({ pageTitle = "Home" }) {
  return (
    <div className="">
      <Head>
        <title>{"JE |" + pageTitle}</title>
      </Head>
      <HeaderNav />
    </div>
  );
}
