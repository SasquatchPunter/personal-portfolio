import Canvas from "../components/Canvas";
import MainContent from "../components/MainContent";
import PageWrapper from "../components/PageWrapper";
import renderer from "../lib/renders/landingPageRender";
import SiteNavWrapper from "../components/SiteNavWrapper";

export default function IndexPage({}) {
  return (
    <PageWrapper title="Home">
      <SiteNavWrapper>
        <MainContent>
          <section className="h-screen relative">
            <Canvas
              className="w-full h-full absolute top-0"
              resize
              renderer={renderer}
              id="animated-header"
            />
            <div className="w-full h-full absolute flex justify-center items-center text-transparent">
              <h1 className="text-6xl md:text-9xl font-bold w-min bg-gradient-to-r from-amber-400 via-red-400 to-pink-500 bg-clip-text">
                Hi,
                <br />
                I'm Jeremy
              </h1>
            </div>
            <Canvas
              className="w-full h-full absolute top-0 pointer-events-none"
              resize
              renderer={renderer}
              id="animated-header"
            />
          </section>
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
