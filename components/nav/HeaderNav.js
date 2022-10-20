import SiteNavButton from "./SiteNavButton";
import SiteNavLink from "./SiteNavLink";

export default function HeaderNav({}) {
  return (
    <nav className="w-full h-full flex justify-between items-center m-auto text-xl">
      <SiteNavLink href="/">
        <span className="text-xl font-medium">J</span>eremy{" "}
        <span className="text-xl font-medium">E</span>lliott
      </SiteNavLink>

      <SiteNavButton />
    </nav>
  );
}
