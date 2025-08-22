import QuantityCounter from "../QuantityCounter";

const CartCard = () => {
  return (
    <div className='flex gap-5 bg-cardbg p-4 rounded-xl '>
      <div className='h-24 w-24 border rounded-xl overflow-hidden'>
        <img src='' alt='' />
      </div>
      <div className='grow flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between md:ps-48'>
        <h4>Product name</h4>
        <div className='grow flex items-center justify-between lg:flex-col'>
          <p>Rs product price</p>
          <p className='line-through text-muted'>Rs discounted price</p>
        </div>
        <div className='ms-auto w-fit'>
          <QuantityCounter />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
