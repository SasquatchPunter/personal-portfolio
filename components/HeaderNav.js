import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="px-4 bg-stone-300 flex space-between h-12 flex items-center">
      <Link href="/">
        <a className="h-fit">
          <span className="text-xl">J</span>eremy{" "}
          <span className="text-xl">E</span>lliott
        </a>
      </Link>
    </nav>
  );
}
