import Layout from "../components/Layout";

export default function IndexPage() {
  return <Layout pageTitle="Home"></Layout>;
}

export async function getStaticProps() {
  return { props: {} };
}
