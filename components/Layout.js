import Head from "next/head";
import HeaderNav from "./HeaderNav";

export default function Layout({ pageTitle = "Home", children }) {
  return (
    <div className="w-full min-h-screen bg-stone-900 text-white">
      <Head>
        <title>{"JE | " + pageTitle}</title>
      </Head>
      <HeaderNav />
      <main>{children}</main>
    </div>
  );
}
