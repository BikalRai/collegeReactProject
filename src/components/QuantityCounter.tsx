const QuantityCounter = () => {
  return (
    <div className='bg-cardbg-light text-cardbg rounded-full flex items-center gap-8 text-lg overflow-hidden w-fit'>
      <button className='cursor-pointer transition-colors hover:bg-primary hover:text-cardbg-light py-0.5 px-2'>
        -
      </button>
      <span>5</span>
      <button className='cursor-pointer transition-colors hover:bg-primary hover:text-cardbg-light py-0.5 px-2'>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
