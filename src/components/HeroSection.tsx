import { heroBg } from '../utilities/images';
import PrimaryButton from './button/PrimaryButton';
import SecondaryButton from './button/SecondaryButton';
import AppContainer from './container/AppContainer';

const HeroSection = () => {
  return (
    <div className=" bg-cardbg">
      <AppContainer>
        <div className="md:h-[464px] grid md:grid-cols-2">
          <div className="flex flex-col gap-6 justify-center ">
            <h1 className="text-[32px] font-bold">Equip the Legend.</h1>
            <div>
              <h3 className="text-2xl font-bold">
                Unleash your setup <span className="text-primary">with</span>{' '}
                gear forged <span className="text-primary">for</span>
              </h3>
              <h3 className="text-2xl font-bold">
                battle—where myth meets machine.
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <PrimaryButton btnText="Shop Gear" />
              <SecondaryButton btnText="View Setups" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={heroBg} alt="Hero image" className="object-cover" />
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default HeroSection;
