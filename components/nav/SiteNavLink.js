import { useAppContext } from "../../contexts/AppContext";
import Link from "next/link";

export default function SiteNavLink({ href, children }) {
  const { siteNav } = useAppContext();
  const onClick = () => {
    if (siteNav.open) {
      siteNav.setOpen(false);
    }
  };
  return (
    <Link href={href}>
      <a
        className="text-xl font-bold hover:scale-110 duration-100"
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
}
