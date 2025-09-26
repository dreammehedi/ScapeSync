import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const SocialNetwork = ({ cls }: { cls: string }) => {
  const icons = [
    { Icon: Youtube, delay: 100, link: "#" },
    { Icon: Twitter, delay: 200, link: "#" },
    { Icon: Facebook, delay: 300, link: "#" },
    { Icon: Instagram, delay: 400, link: "#" },
  ];

  return (
    <div className={`flex items-center gap-3 flex-wrap *:text-white ${cls}`}>
      {icons.map(({ Icon, delay, link }, index) => (
        <Link
          key={index}
          to={link}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={delay}
        >
          <Icon size={18} className="smooth-transition hover:text-green-500" />
        </Link>
      ))}
    </div>
  );
};
