import LandingSpinner from "../components/LandingSpinner";
import MainContent from "../components/MainContent";
import PageWrapper from "../components/PageWrapper";
import SiteHeader from "../components/SiteHeader";

export default function IndexPage({}) {
  return (
    <PageWrapper title="Home">
      {/* <SiteNavWrapper></SiteNavWrapper> */}
      <MainContent>
        <section className="h-screen relative flex flex-col items-center justify-center">
          <LandingSpinner />
        </section>
        <SiteHeader />
      </MainContent>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
