interface ProductPropType {
  children: React.ReactNode;
  color: string;
}

const ProductInfo = ({ children, color }: ProductPropType) => {
  return (
    <div
      className={`flex items-center gap-1 bg-${color} px-2 py-0.5 rounded-full`}
    >
      {children}
    </div>
  );
};

export default ProductInfo;
