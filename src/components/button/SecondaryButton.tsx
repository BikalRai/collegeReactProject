import type { BtnType } from "../../utilities/types/btnType";

const SecondaryButton = ({ btnText }: BtnType) => {
  return (
    <button className='px-6 py-3 text-primary border border-primary rounded-4xl transition cursor-pointer hover:shadow-glow'>
      {btnText}
    </button>
  );
};

export default SecondaryButton;
