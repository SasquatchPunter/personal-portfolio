import Link from "next/link";
import SiteNavButton from "./SiteNavButton";

export default function HeaderNav({}) {
  return (
    <nav className="w-full h-full flex justify-between items-center m-auto text-xl">
      <Link href="/">
        <a>
          <span className="text-xl font-medium">J</span>eremy{" "}
          <span className="text-xl font-medium">E</span>lliott
        </a>
      </Link>

      <SiteNavButton />
    </nav>
  );
}
