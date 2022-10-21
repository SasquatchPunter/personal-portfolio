import SiteNavButton from "./SiteNavButton";
import SiteNavLink from "./SiteNavLink";

export default function HeaderNav({}) {
  return (
    <nav className="w-full h-full flex justify-between items-center m-auto text-xl">
      <SiteNavLink href="/">
        <div className="text-pink-600 text-4xl font-bold">JE</div>
      </SiteNavLink>

      <SiteNavButton />
    </nav>
  );
}
