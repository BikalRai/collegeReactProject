interface ProductLayoutType {
  children: React.ReactNode;
}

const ProductLayout = ({ children }: ProductLayoutType) => {
  return (
    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
      {children}
    </div>
  );
};

export default ProductLayout;
