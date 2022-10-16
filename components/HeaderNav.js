import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="text-cyan-100 px-4 flex justify-between h-20 flex items-center w-full sticky top-0 bg-black/60 backdrop-blur-md shadow-inner-xl shadow-black">
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
