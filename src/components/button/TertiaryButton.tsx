import type { BtnType } from "../../utilities/types/btnType";

const TertiaryButton = ({
  btnText,
  type = "button",
  clickFunction,
  deleteFunction,
}: BtnType) => {
  return (
    <button
      type={type}
      onClick={
        clickFunction
          ? clickFunction
          : deleteFunction
          ? () => deleteFunction(btnText) // or pass correct id later
          : undefined
      }
      className='text-cardbg rounded-full px-6 py-1.5 cursor-pointer transition-colors hover:text-alert'
    >
      {btnText}
    </button>
  );
};

export default TertiaryButton;
