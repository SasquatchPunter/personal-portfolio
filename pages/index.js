import LandingSpinner from "../components/LandingSpinner";
import MainContent from "../components/MainContent";
import PageWrapper from "../components/PageWrapper";
import SiteNavWrapper from "../components/SiteNavWrapper";

export default function IndexPage({}) {
  return (
    <PageWrapper title="Home">
      <SiteNavWrapper>
        <MainContent>
          <section className="h-screen relative flex flex-col items-center justify-center">
            <LandingSpinner />
          </section>
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
