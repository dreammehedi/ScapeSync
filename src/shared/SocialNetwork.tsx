import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
export const SocialNetwork = ({ cls }: { cls: string }) => {
  return (
    <>
      <div className={`flex items-center gap-3 flex-wrap *:text-white ${cls}`}>
        <Link to={"#"}>
          <Youtube
            size={18}
            className="smooth-transition hover:text-green-500"
          />
        </Link>
        <Link to={"#"}>
          <Twitter
            size={18}
            className="smooth-transition hover:text-green-500"
          />
        </Link>
        <Link to={"#"}>
          <Facebook
            size={18}
            className="smooth-transition hover:text-green-500"
          />
        </Link>
        <Link to={"#"}>
          <Instagram
            size={18}
            className="smooth-transition hover:text-green-500"
          />
        </Link>
      </div>
    </>
  );
};
