import type { BtnType } from "../../utilities/types/btnType";

const TertiaryButton = ({ btnText }: BtnType) => {
  return (
    <button className='text-cardbg rounded-full px-6 py-1.5 cursor-pointer transition-colors hover:text-alert'>
      {btnText}
    </button>
  );
};

export default TertiaryButton;
