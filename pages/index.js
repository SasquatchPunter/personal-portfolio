import Canvas from "../components/Canvas";
import Layout from "../components/Layout";
import renderer from "../lib/renders/landingPageRender";

export default function IndexPage() {
  return (
    <Layout pageTitle="Home">
      <section className="h-screen-3/4 relative">
        <Canvas
          className="w-full h-full absolute"
          resize
          renderer={renderer}
          id="animated-header"
        />
        <div className="absolute top-0">
          <h1 className="text-9xl">Hi</h1>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
