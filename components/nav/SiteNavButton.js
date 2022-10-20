import { useAppContext } from "../../contexts/AppContext";

export default function SiteNavButton() {
  const { siteNav } = useAppContext();
  const onClick = () => {
    siteNav.setOpen((open) => !open);
  };

  return (
    <button
      style={siteNav.open ? { transform: "rotate(90deg)" } : undefined}
      className="w-12 h-12 flex flex-col p-2 justify-between duration-200"
      onClick={onClick}
    >
      <div className="w-full h-1 bg-amber-400"></div>
      <div className="w-full h-1 bg-amber-400"></div>
      <div className="w-full h-1 bg-amber-400"></div>
    </button>
  );
}
