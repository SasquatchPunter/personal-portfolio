import Head from "next/head";

export default function Layout({ pageTitle = "Home" }) {
  return (
    <div>
      <Head>
        <title>JE | {pageTitle}</title>
      </Head>
    </div>
  );
}
