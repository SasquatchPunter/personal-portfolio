import MainContent from "../../components/MainContent";
import PageTitleHeader from "../../components/PageTitleHeader";
import PageWrapper from "../../components/PageWrapper";
import SiteNavWrapper from "../../components/SiteNavWrapper";

export default function WorkPage() {
  return (
    <PageWrapper title="My Work">
      <SiteNavWrapper>
        <MainContent>
          <PageTitleHeader>Work</PageTitleHeader>
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}
