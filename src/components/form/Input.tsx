import { LuCamera } from 'react-icons/lu';
import type { InputType } from '../../utilities/types/appTypes';
import ProductReviewTextarea from '../productPage/ProductReviewTextarea';

const Input = ({
  name,
  type = 'text',
  inputPlaceholder,
  inputValue,
  inputHandler,
}: InputType) => {
  const htmlValue =
    type === 'file' || typeof inputValue !== 'string' ? '' : String(inputValue);

  if (type === 'textarea') {
    return (
      <ProductReviewTextarea
        title="Product description"
        placeholderText={inputPlaceholder}
        textRow={10}
        value={inputValue}
        onChange={inputHandler}
      />
    );
  }

  if (type === 'file') {
    return (
      <div className="grid gap-1">
        <label htmlFor={name} className="ms-1">
          Upload Image:
        </label>
        <div className="border h-40 w-56 relative rounded-xl overflow-hidden">
          <input
            type="file"
            name={name}
            placeholder={inputPlaceholder}
            value={htmlValue}
            onChange={inputHandler}
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
    );
  }

  if (name === 'badge' || type === 'checkbox') {
    const badgeValues: string[] = Array.isArray(inputValue)
      ? (inputValue as string[])
      : [];

    return (
      <div className="grid gap-2">
        <label htmlFor={name} className="ms-2">
          {name[0].toUpperCase() + name.slice(1).toLowerCase()}:
        </label>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name={name}
              value="recommended"
              checked={badgeValues.includes('recommended')}
              className="w-5 h-5"
            />{' '}
            <label htmlFor={name}>Recommended</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name={name}
              value="topRated"
              checked={badgeValues.includes('topRated')}
              className="w-5 h-5"
            />{' '}
            <label htmlFor={name}>Top Rated</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name={name}
              value="hotDeal"
              checked={badgeValues.includes('hotDeal')}
              className="w-5 h-5"
            />{' '}
            <label htmlFor={name}>Hot Deal</label>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'select' || name === 'categories') {
    return (
      <div className="grid gap-2">
        <label htmlFor={name} className="ms-2">
          {name[0].toUpperCase() + name.slice(1).toLowerCase()}:
        </label>
        <select
          name={name}
          id={name}
          className="w-full rounded-full border border-muted py-2 ps-4 pr-10 outline-none focus:border-primary focus:ring-1 focus:ring-primary  focus:text-primary"
          onChange={inputHandler}
          value={htmlValue}
        >
          <option value="peripherals">Peripherals</option>
          <option value="visuals">Visuals</option>
          <option value="powerCore">Power Core</option>
          <option value="comfortGear">Comfort Gear</option>
        </select>
      </div>
    );
  }

  return (
    <>
      {/* {type === 'textarea' ? (
        <ProductReviewTextarea
          title="Product description"
          placeholderText={inputPlaceholder}
          textRow={10}
          value={inputValue}
          onChange={inputHandler}
        />
      ) : type === 'file' ? (
        <div className="grid gap-1">
          <label htmlFor={name} className="ms-1">
            Upload Image:
          </label>
          <div className="border h-40 w-56 relative rounded-xl overflow-hidden">
            <input
              type="file"
              name={name}
              placeholder={inputPlaceholder}
              value={htmlValue}
              onChange={inputHandler}
              className="w-full h-full cursor-pointer absolute top-0 left-0 z-40 opacity-0"
            /> */}
      {/* <LuCamera className="w-full h-full absolute top-0 left-0 z-20" /> */}
      {/* <img
          src=''
          alt=''
          className='h-full w-full bg-red-200 absolute top-0 left-0 z-30'
        /> */}
      {/* </div>
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
              value={htmlValue}
              onChange={inputHandler}
            />
          </div>
        </div>
      )} */}
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
            value={htmlValue}
            onChange={inputHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
