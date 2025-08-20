interface ProductLayoutType {
  children: React.ReactNode;
}

const ProductLayout = ({ children }: ProductLayoutType) => {
  return (
    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
      {children}
    </div>
  );
};

export default ProductLayout;
