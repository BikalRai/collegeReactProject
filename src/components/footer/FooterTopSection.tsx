import FooterTopAddress from "./FooterTopAddress";
import FooterTopPayment from "./FooterTopPayment";
import FooterTopSocials from "./FooterTopSocials";
import FooterTopUsefulLinks from "./FooterTopUsefulLinks";

const FooterTopSection = () => {
  return (
    <div className='grid gap-8 md:grid-cols-3 lg:grid-cols-4 align-center text-cardbg-light font-medium'>
      <FooterTopSocials />
      <FooterTopAddress />
      <FooterTopUsefulLinks />
      <FooterTopPayment />
    </div>
  );
};

export default FooterTopSection;
