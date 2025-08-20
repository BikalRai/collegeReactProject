import type { BtnType } from "../../utilities/types/btnTYpe";

const SecondaryButtonNoGlow = ({ btnText }: BtnType) => {
  return (
    <button className='px-6 py-3 text-primary border border-primary rounded-4xl transition cursor-pointer hover:border-cardbg-light hover:shadow-[1px_2px_8px_rgba(0,0,0,0.5)]'>
      {btnText}
    </button>
  );
};

export default SecondaryButtonNoGlow;
