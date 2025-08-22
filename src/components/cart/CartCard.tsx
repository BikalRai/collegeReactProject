import QuantityCounter from "../QuantityCounter";

const CartCard = () => {
  return (
    <div className='flex gap-5 bg-cardbg p-4 rounded-2xl'>
      <div className='h-24 w-24 border rounded-xl overflow-hidden'>
        <img src='' alt='' />
      </div>
      <div className='grow flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between'>
        <h4>Product name</h4>
        <div className='flex items-center justify-between lg:flex-col'>
          <p>Rs product price</p>
          <p className='line-through text-muted'>Rs discounted price</p>
        </div>
        <div className='ms-auto'>
          <QuantityCounter />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
