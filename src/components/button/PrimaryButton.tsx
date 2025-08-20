import type { BtnType } from "../../utilities/types/btnTYpe";

const PrimaryButton = ({ btnText }: BtnType) => {
  return (
    <button className='bg-primary text-text-primary px-6 py-3 rounded-4xl cursor-pointer transition hover:shadow-glow'>
      {btnText}
    </button>
  );
};

export default PrimaryButton;
