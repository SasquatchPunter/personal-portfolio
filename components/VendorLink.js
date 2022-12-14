import contacts from "../lib/data/contacts.json";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillCodepenCircle } from "react-icons/ai";

export default function VendorLink({ className, vendor = "github" }) {
  const baseClass = "active:text-pink-500";

  const init = () => {
    switch (vendor) {
      case "github":
        return <BsGithub className="w-full h-full" />;
      case "codepen":
        return <AiFillCodepenCircle className="w-full h-full" />;
      case "linkedin":
        return <BsLinkedin className="w-full h-full" />;
    }
  };

  return (
    <a
      className={[baseClass, className].join(" ")}
      href={contacts.socials[vendor]}
      target="_blank"
    >
      {init()}
    </a>
  );
}
