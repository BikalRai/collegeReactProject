import type { BtnType } from "../../utilities/types/btnType";

const PrimaryButtonNoGlow = ({
  btnText,
  type = "button",
  clickFunction,
}: BtnType) => {
  return (
    <button
      className='bg-primary text-text-primary px-6 py-1.5 rounded-4xl w-fit cursor-pointer transition hover:shadow-[4px_8px_16px_rgba(0,0,0,0.4)]'
      type={type}
      onClick={clickFunction}
    >
      {btnText}
    </button>
  );
};

export default PrimaryButtonNoGlow;
