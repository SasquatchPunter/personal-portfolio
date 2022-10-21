import { useAppContext } from "../../contexts/AppContext";
import SiteNavLink from "./SiteNavLink";

export default function SiteNav({}) {
  const { siteNav } = useAppContext();
  return (
    <menu
      style={siteNav.open ? { opacity: 1, pointerEvents: "auto" } : undefined}
      className="fixed flex flex-col gap-4 justify-center items-center w-full h-screen top-0 bg-black/80 z-40 opacity-0 pointer-events-none duration-200"
    >
      <SiteNavLink href="/about">About</SiteNavLink>
      <SiteNavLink href="/work">My Work</SiteNavLink>
      <SiteNavLink href="/blog">Blog</SiteNavLink>
      <SiteNavLink href="/contact">Contact</SiteNavLink>
    </menu>
  );
}
