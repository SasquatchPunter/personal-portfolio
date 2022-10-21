import MainContent from "../../components/MainContent";
import PageWrapper from "../../components/PageWrapper";
import SiteNavWrapper from "../../components/SiteNavWrapper";
import Canvas from "../../components/Canvas";
import triRenderer from "../../lib/renders/triBackgroundRender";

export default function AboutPage() {
  return (
    <PageWrapper title="About Me">
      <SiteNavWrapper>
        <MainContent>
          <Canvas
            className="w-full h-screen-1/2"
            resize
            renderer={triRenderer}
          />
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}
