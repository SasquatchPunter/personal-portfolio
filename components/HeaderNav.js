import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="px-4 bg-stone-300 flex justify-between h-12 flex items-center w-full text-stone-900">
      <Link href="/">
        <a>
          <span className="text-xl">J</span>eremy{" "}
          <span className="text-xl">E</span>lliott
        </a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </nav>
  );
}
