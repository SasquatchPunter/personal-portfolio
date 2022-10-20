import MainContent from "../../components/MainContent";
import PageWrapper from "../../components/PageWrapper";
import SiteNavWrapper from "../../components/SiteNavWrapper";
import Canvas from "../../components/Canvas";

export default function AboutPage() {
  return (
    <PageWrapper title="About Me">
      <SiteNavWrapper>
        <MainContent>
          <Canvas className="w-full h-screen-1/2 bg-blue-400" />
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}
