import SiteNavButton from "./SiteNavButton";
import SiteNavLink from "./SiteNavLink";

export default function HeaderNav({}) {
  return (
    <nav className="w-full h-full flex justify-between items-center m-auto text-xl">
      <SiteNavLink href="/">
        <div className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-4xl text-transparent font-bold">
          JE
        </div>
      </SiteNavLink>

      <SiteNavButton />
    </nav>
  );
}
