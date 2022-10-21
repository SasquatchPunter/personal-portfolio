import Canvas from "../components/Canvas";
import MainContent from "../components/MainContent";
import PageWrapper from "../components/PageWrapper";
import SiteNavWrapper from "../components/SiteNavWrapper";
import renderer from "../lib/renders/triBackgroundRender";

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
            />
            <div className="w-full h-full absolute flex justify-center items-center">
              <h1 className="text-6xl md:text-9xl font-bold w-max text-pink-500">
                Hi,
                <br />
                I'm Jeremy
              </h1>
            </div>
          </section>
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
