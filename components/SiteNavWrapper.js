import SiteHeader from "./SiteHeader";
import SiteNav from "./nav/SiteNav";

export default function SiteNavWrapper({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteNav />
    </>
  );
}
