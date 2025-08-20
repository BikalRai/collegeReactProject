import { FaFacebook, FaInstagramSquare, FaPinterest } from "react-icons/fa";
import type { FooterLinkTypes } from "../../utilities/types/appTypes";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { logo } from "../../utilities/images";

const socialLinks: FooterLinkTypes[] = [
  { path: "/facebook", icon: <FaFacebook /> },
  { path: "/instagram", icon: <FaInstagramSquare /> },
  { path: "/twitter", icon: <FaXTwitter /> },
  { path: "/pinterest", icon: <FaPinterest /> },
];

const FooterTopSocials = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div>
        <img src={logo} alt='Logo' className='w-[160px]' />
        <p className='font-semibold'>Myth meets machine</p>
      </div>
      <div className='flex items-center gap-4'>
        {socialLinks.map((socialLink, i) => (
          <Link
            key={i}
            to={socialLink.path}
            className='transition-colors hover:text-primary text-lg'
          >
            {socialLink.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterTopSocials;
