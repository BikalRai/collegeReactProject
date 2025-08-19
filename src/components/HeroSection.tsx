import { heroBg } from '../utilities/images';
import PrimaryButton from './button/PrimaryButton';
import SecondaryButton from './button/SecondaryButton';

const HeroSection = () => {
  return (
    <div className=" bg-cardbg">
      <div className="text-text-primary grid mt-8 p-4 md:h-[464px] lg:max-w-[1440px] lg:m-auto lg:px-20 md:grid-cols-2">
        <div className="flex flex-col gap-6 justify-center ">
          <h1 className="text-[32px] font-bold">Equip the Legend.</h1>
          <div>
            <h3 className="text-2xl font-bold">
              Unleash your setup <span className="text-primary">with</span> gear
              forged <span className="text-primary">for</span>
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
    </div>
  );
};

export default HeroSection;
