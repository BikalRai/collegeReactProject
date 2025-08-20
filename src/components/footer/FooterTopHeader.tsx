import type { FooterHeaderType } from "../../utilities/types/appTypes";

const FooterTopHeader = ({ title }: FooterHeaderType) => {
  return (
    <h2 className="text-xl font-bold after:content[''] after:block after:h-0.5 after:w-full after:bg-primary after:mt-2">
      {title}
    </h2>
  );
};

export default FooterTopHeader;
