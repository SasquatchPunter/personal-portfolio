import { useEffect, useRef } from "react";
import { useAppContext } from "../../contexts/AppContext";
import VendorLink from "../VendorLink";
import SiteNavLink from "./SiteNavLink";

export default function SiteNav({}) {
  const { siteNav } = useAppContext();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const menu = ref.current;
    const c1 = ref2.current;
    const c2 = ref3.current;

    const handleMouseMove = (e) => {
      const damp = 20;
      const xRot = (window.innerWidth / 2 - e.screenX) / damp;
      const yRot = (window.innerHeight / 2 - e.screenY) / damp;
      c1.style.setProperty("--tw-rotate-x", `${yRot}deg`);
      c1.style.setProperty("--tw-rotate-y", `${-xRot}deg`);
      c2.style.setProperty("--tw-rotate-x", `${yRot}deg`);
      c2.style.setProperty("--tw-rotate-y", `${-xRot}deg`);
    };

    menu.addEventListener("mousemove", handleMouseMove);

    return () => {
      menu.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const vendorLinkClass =
    "w-8 h-8 hover:scale-110 hover:-translate-y-0.5 hover:drop-shadow-icon-sm duration-100";

  return (
    <menu
      ref={ref}
      style={siteNav.open ? { opacity: 1, pointerEvents: "auto" } : undefined}
      className="fixed flex justify-center items-center w-full h-screen top-0 bg-black/80 z-40 opacity-0 pointer-events-none duration-200 perspective-800 perspective-origin-c transform-flat"
    >
      <nav ref={ref2} className="flex flex-col gap-4 transform-3d">
        <SiteNavLink href="/about">About</SiteNavLink>
        <SiteNavLink href="/work">My Work</SiteNavLink>
        <SiteNavLink href="/blog">Blog</SiteNavLink>
        <SiteNavLink href="/contact">Contact</SiteNavLink>
      </nav>
      <nav
        ref={ref3}
        className="flex flex-row gap-4 absolute bottom-0 m-8 transform-3d"
      >
        <VendorLink className={vendorLinkClass} vendor="github" />
        <VendorLink className={vendorLinkClass} vendor="linkedin" />
        <VendorLink className={vendorLinkClass} vendor="codepen" />
      </nav>
    </menu>
  );
}
