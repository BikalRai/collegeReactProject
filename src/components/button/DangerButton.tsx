import type { BtnType } from "../../utilities/types/btnTYpe";

const DangerButton = ({ btnText }: BtnType) => {
  return (
    <button className='bg-alert text-text-primary px-6 py-1.5 rounded-4xl w-fit cursor-pointer transition hover:shadow-[4px_8px_16px_rgba(0,0,0,0.4)]'>
      {btnText}
    </button>
  );
};

export default DangerButton;
