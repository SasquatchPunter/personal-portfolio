import Head from "next/head";
import icon from "../public/icons/site-logo.svg?url";

export default function PageWrapper({ title, children }) {
  return (
    <div className="w-full min-h-screen font-kanit bg-stone-800 text-amber-400">
      <Head>
        <title>{"JE | " + title}</title>
        <link rel="icon" type="image/svg+xml" href={icon} />
      </Head>
      {children}
    </div>
  );
}
