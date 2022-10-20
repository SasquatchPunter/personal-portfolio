import Head from "next/head";
import HeaderNav from "./HeaderNav";

export default function Layout({ pageTitle = "Home", children, className }) {
  return (
    <div
      className={[
        "w-full min-h-screen bg-stone-900 text-cyan-100 font-kanit",
        className,
      ].join(" ")}
    >
      <Head>
        <title>{"JE | " + pageTitle}</title>
      </Head>
      <HeaderNav />
      <main className="md:w-1/2 m-auto">{children}</main>
    </div>
  );
}
