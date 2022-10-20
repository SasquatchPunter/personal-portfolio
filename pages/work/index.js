import MainContent from "../../components/MainContent";
import PageWrapper from "../../components/PageWrapper";
import SiteNavWrapper from "../../components/SiteNavWrapper";

export default function WorkPage() {
  return (
    <PageWrapper title="My Work">
      <SiteNavWrapper>
        <MainContent></MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}
