import Layout from "../components/layout";

export default function IndexPage() {
  return <Layout pageTitle="Home"></Layout>;
}

export async function getStaticProps() {
  return { props: {} };
}
