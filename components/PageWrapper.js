import Head from "next/head";

export default function PageWrapper({ title, children }) {
  return (
    <div className="w-full min-h-screen font-kanit bg-stone-900 text-amber-400">
      <Head>
        <title>{"JE | " + title}</title>
      </Head>
      {children}
    </div>
  );
}
