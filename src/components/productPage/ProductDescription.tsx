const ProductDescription = () => {
  return (
    <div className='grid gap-10'>
      <div className='flex flex-col gap-5'>
        <h3 className='text-2xl font-bold'>Product Description</h3>
        <p className='font-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse amet
          error harum beatae corrupti eligendi quidem consequatur quos a.
        </p>
      </div>
      <div>
        <h3 className='text-2xl font-bold'>Product Details</h3>
        <ul className='font-normal'>
          <li>Detail</li>
          <li>Detail</li>
          <li>Detail</li>
          <li>Detail</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
