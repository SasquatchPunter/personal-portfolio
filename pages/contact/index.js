import MainContent from "../../components/MainContent";
import PageTitleHeader from "../../components/PageTitleHeader";
import PageWrapper from "../../components/PageWrapper";
import SiteNavWrapper from "../../components/SiteNavWrapper";

export default function ContactPage({}) {
  return (
    <PageWrapper title="Contact Me">
      <SiteNavWrapper>
        <MainContent>
          <PageTitleHeader>
            Contact
            <br />
            Me
          </PageTitleHeader>
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}
