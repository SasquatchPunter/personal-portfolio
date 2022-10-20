import MainContent from "../../components/MainContent";
import PageWrapper from "../../components/PageWrapper";
import SiteNavWrapper from "../../components/SiteNavWrapper";

export default function AboutPage() {
  return (
    <PageWrapper title="About Me">
      <SiteNavWrapper>
        <MainContent></MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}
