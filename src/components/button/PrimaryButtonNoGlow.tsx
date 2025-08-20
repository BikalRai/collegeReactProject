import type { BtnType } from "../../utilities/types/btnTYpe";

const PrimaryButtonNoGlow = ({ btnText }: BtnType) => {
  return (
    <button className='bg-primary text-text-primary px-6 py-3 rounded-4xl cursor-pointer transition hover:shadow-[1px_2px_8px_rgba(0,0,0,0.5)]'>
      {btnText}
    </button>
  );
};

export default PrimaryButtonNoGlow;
