import HeaderNav from "./nav/HeaderNav";

export default function SiteHeader({}) {
  return (
    <header className="px-4 h-20 w-full sticky top-0 bg-black/40 backdrop-blur-sm z-50">
      <HeaderNav />
    </header>
  );
}
