import { Link } from "react-router-dom";
import type { FooterUsefulLinkTypes } from "../../utilities/types/appTypes";
import FooterTopHeader from "./FooterTopHeader";

const usefulLinks: FooterUsefulLinkTypes[] = [
  { linkName: "Accessories", path: "/accessories" },
  { linkName: "Setup", path: "/setups" },
  { linkName: "Deals", path: "/deals" },
  { linkName: "About", path: "/about" },
  { linkName: "Delievery & Return", path: "/dnr" },
  { linkName: "Blogs", path: "/blogs" },
];

const FooterTopUsefulLinks = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <FooterTopHeader title='Useful Links' />
      <div className='flex flex-col justify-center items-center gap-3'>
        {usefulLinks.map((usefulLink, i) => (
          <Link
            key={i}
            to={usefulLink.path}
            className='transition-colors hover:text-primary'
          >
            {usefulLink.linkName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterTopUsefulLinks;
