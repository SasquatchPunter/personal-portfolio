import Head from "next/head";
import HeaderNav from "./HeaderNav";

export default function Layout({ pageTitle = "Home", children }) {
  return (
    <div className="w-full">
      <Head>
        <title>{"JE | " + pageTitle}</title>
      </Head>
      <HeaderNav />
      {children}
    </div>
  );
}