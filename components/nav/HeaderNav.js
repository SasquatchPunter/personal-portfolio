import SiteNavButton from "./SiteNavButton";
import SiteNavLink from "./SiteNavLink";
import Icon from "../../public/icons/site-logo.svg";

export default function HeaderNav({}) {
  return (
    <nav className="w-full h-full flex justify-between items-center m-auto text-xl">
      <SiteNavLink href="/">
        <Icon className="w-8 h-8" />
      </SiteNavLink>

      <SiteNavButton />
    </nav>
  );
}
