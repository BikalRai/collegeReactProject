import { LuCamera } from 'react-icons/lu';
import type { InputType } from '../../utilities/types/appTypes';

const Input = ({ name, type = 'text', inputPlaceholder }: InputType) => {
  return (
    <>
      {type === 'file' ? (
        <div className="grid gap-1">
          <label htmlFor={name} className="ms-1">
            Upload Image:
          </label>
          <div className="border h-40 w-56 relative rounded-xl overflow-hidden">
            <input
              type="file"
              name={name}
              placeholder={inputPlaceholder}
              className="w-full h-full cursor-pointer absolute top-0 left-0 z-40 opacity-0"
            />
            <LuCamera className="w-full h-full absolute top-0 left-0 z-20" />
            {/* <img
          src=''
          alt=''
          className='h-full w-full bg-red-200 absolute top-0 left-0 z-30'
        /> */}
          </div>
        </div>
      ) : (
        <div className="grid gap-1">
          <label htmlFor={name} className="block ms-1">
            {name[0].toUpperCase() + name.slice(1).toLowerCase()}:{' '}
          </label>
          <div className="border border-muted rounded-full overflow-hidden focus-within:border-primary">
            <input
              className="outline-0 w-full ps-4 py-2"
              type={type}
              placeholder={inputPlaceholder}
              name={name}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
