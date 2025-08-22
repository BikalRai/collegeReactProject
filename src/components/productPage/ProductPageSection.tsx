interface PropType {
  children: React.ReactNode;
}

const ProductPageSection = ({ children }: PropType) => {
  return <div className='mt-8 border-b border-b-muted pb-7'>{children}</div>;
};

export default ProductPageSection;
