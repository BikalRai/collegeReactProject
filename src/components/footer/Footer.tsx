import AppContainer from "../container/AppContainer";
import LineSeparator from "../LineSeparator";
import FooterBottomSection from "./FooterBottomSection";
import FooterTopSection from "./FooterTopSection";

const Footer = () => {
  return (
    <AppContainer>
      <LineSeparator />
      <div className='mt-12'></div>
      <FooterTopSection />
      <FooterBottomSection />
    </AppContainer>
  );
};

export default Footer;
