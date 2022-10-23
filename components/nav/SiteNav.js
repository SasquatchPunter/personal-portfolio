import { useAppContext } from "../../contexts/AppContext";
import useResponsiveTilt from "../../lib/hooks/useResponsiveTilt";
import VendorLink from "../VendorLink";
import SiteNavLink from "./SiteNavLink";

export default function SiteNav({}) {
  const { siteNav } = useAppContext();

  const { tiltParent, tiltChild } = useResponsiveTilt();

  const vendorLinkClass =
    "w-8 h-8 hover:scale-110 hover:-translate-y-0.5 hover:drop-shadow-icon-sm duration-100";
  const menuClass =
    "fixed flex justify-center items-center w-full h-screen top-0 bg-black/80 z-40 opacity-0 pointer-events-none duration-200 perspective-800 perspective-origin-c transform-flat";

  return (
    <menu
      ref={tiltParent}
      style={siteNav.open ? { opacity: 1, pointerEvents: "auto" } : undefined}
      className={menuClass}
    >
      <nav ref={tiltChild} className="flex flex-col gap-4 transform-3d">
        <SiteNavLink href="/about">About</SiteNavLink>
        <SiteNavLink href="/work">My Work</SiteNavLink>
        <SiteNavLink href="/blog">Blog</SiteNavLink>
        <SiteNavLink href="/contact">Contact</SiteNavLink>
      </nav>
      <nav
        ref={tiltChild}
        className="flex flex-row gap-4 absolute bottom-0 m-8 transform-3d"
      >
        <VendorLink className={vendorLinkClass} vendor="github" />
        <VendorLink className={vendorLinkClass} vendor="linkedin" />
        <VendorLink className={vendorLinkClass} vendor="codepen" />
      </nav>
    </menu>
  );
}
