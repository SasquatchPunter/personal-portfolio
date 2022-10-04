import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout pageTitle="Home">
      <h1>Home</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
