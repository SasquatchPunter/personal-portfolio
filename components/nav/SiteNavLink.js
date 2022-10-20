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
      <a onClick={onClick}>{children}</a>
    </Link>
  );
}
