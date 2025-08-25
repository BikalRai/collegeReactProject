import { LuCamera, LuX } from "react-icons/lu";
import type { InputType } from "../../utilities/types/appTypes";
import ProductReviewTextarea from "../productPage/ProductReviewTextarea";
import { useState } from "react";
import PrimaryButtonNoGlow from "../button/PrimaryButtonNoGlow";
import type { Badge } from "../../utilities/types/productType";

const badges: Badge[] = [
  { id: 1, name: "Recommended" },
  { id: 2, name: "Top Rated" },
  { id: 3, name: "Hot Deals" },
];

const Input = ({
  name,
  type = "text",
  inputPlaceholder,
  inputValue,
  inputHandler,
  onImagesChange,
  onBadgesChange,
}: InputType) => {
  const htmlValue =
    type === "file"
      ? ""
      : Array.isArray(inputValue)
      ? ""
      : inputValue !== undefined
      ? String(inputValue)
      : "";

  const [preview, setPreview] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<number[]>([]);

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const confirmImage = () => {
    if (!preview) return;
    setImages((prev) => {
      const newImages = [...prev, preview]; // add URL string
      if (onImagesChange) onImagesChange(newImages);
      return newImages;
    });
    setPreview(""); // clear preview
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = prev.filter((_, i) => i !== index);
      if (onImagesChange) onImagesChange(newImages);
      return newImages;
    });
  };

  const handleBadgeChange = (badgeId: number) => {
    setSelectedBadges((prev) => {
      const newSelected = prev.includes(badgeId)
        ? prev.filter((id) => id !== badgeId)
        : [...prev, badgeId];

      if (onBadgesChange) onBadgesChange(newSelected);
      return newSelected;
    });
  };

  if (type === "textarea") {
    return (
      <ProductReviewTextarea
        title='Product description'
        placeholderText={inputPlaceholder}
        textRow={10}
        value={inputValue}
        onChange={inputHandler}
      />
    );
  }

  if (type === "file") {
    return (
      <div className='grid gap-1'>
        <label htmlFor={name} className='ms-1'>
          Upload Image:
        </label>
        <div className='flex gap-5'>
          <div className='border h-40 w-56 relative rounded-xl overflow-hidden'>
            <input
              type='file'
              name={name}
              placeholder={inputPlaceholder}
              value={htmlValue}
              onChange={(e) => {
                handleImagePreview(e);
                inputHandler(e);
              }}
              className='w-full h-full cursor-pointer absolute top-0 left-0 z-40 opacity-0'
            />
            {!preview && (
              <LuCamera className='w-full h-full absolute top-0 left-0 z-20' />
            )}
            {preview && (
              <img
                src={preview}
                alt='Preview'
                className='h-full w-full object-cover absolute top-0 left-0 z-30'
              />
            )}
          </div>
          {images.map((img, index) => (
            <div key={index} className='relative group'>
              <img
                src={img}
                alt={`Image ${index}`}
                className='h-20 w-20 object-cover rounded-lg border'
              />
              <button
                type='button'
                onClick={() => removeImage(index)}
                className='absolute top-0 right-0 bg-alert text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition'
              >
                <LuX size={14} />
              </button>
            </div>
          ))}
        </div>
        {preview && (
          <div onClick={confirmImage}>
            <PrimaryButtonNoGlow btnText='Add image' />
          </div>
        )}
      </div>
    );
  }

  if (name === "badge" || type === "checkbox") {
    return (
      <div className='flex flex-col'>
        <h2 className='font-semibold mb-2'>Select Badges:</h2>
        <div className='flex items-center gap-4'>
          {badges.map((badge) => (
            <label key={badge.id} className='block cursor-pointer'>
              <input
                type='checkbox'
                value={badge.id}
                checked={selectedBadges.includes(badge.id)}
                onChange={() => handleBadgeChange(badge.id)}
              />
              <span className='ml-2'>{badge.name}</span>
            </label>
          ))}
        </div>

        <div className='mt-4'>
          <h3 className='font-medium'>Selected Badges:</h3>
          <div className='flex gap-2 mt-2'>
            {selectedBadges.map((id) => {
              const badge = badges.find((b) => b.id === id);
              return (
                <span
                  key={id}
                  className='px-3 py-1 rounded bg-blue-500 text-white text-sm'
                >
                  {badge?.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (type === "select" || name === "categories") {
    return (
      <div className='grid gap-2 max-h-12'>
        <label htmlFor={name} className='ms-2'>
          {name[0].toUpperCase() + name.slice(1).toLowerCase()}:
        </label>
        <select
          name={name}
          id={name}
          className='w-full rounded-full border border-muted py-2 ps-4 pr-10 outline-none focus:border-primary focus:ring-1 focus:ring-primary  focus:text-primary'
          onChange={inputHandler}
          value={htmlValue}
        >
          <option value='peripherals'>Peripherals</option>
          <option value='visuals'>Visuals</option>
          <option value='powerCore'>Power Core</option>
          <option value='comfortGear'>Comfort Gear</option>
        </select>
      </div>
    );
  }

  return (
    <>
      <div className='grid gap-1'>
        <label htmlFor={name} className='block ms-1'>
          {name[0].toUpperCase() + name.slice(1).toLowerCase()}:{" "}
        </label>
        <div className='border border-muted rounded-full overflow-hidden focus-within:border-primary'>
          <input
            className='outline-0 w-full ps-4 py-2'
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
