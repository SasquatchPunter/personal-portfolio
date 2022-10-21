import MainContent from "../../components/MainContent";
import PageWrapper from "../../components/PageWrapper";
import SiteNavWrapper from "../../components/SiteNavWrapper";
import PageTitleHeader from "../../components/PageTitleHeader";

export default function AboutPage() {
  return (
    <PageWrapper title="About Me">
      <SiteNavWrapper>
        <MainContent>
          <PageTitleHeader>About</PageTitleHeader>
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}
