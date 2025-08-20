import { useSelector } from "react-redux";
import type { RootState } from "../store";

const RecommendationPage = () => {
  const products = useSelector((state: RootState) => state.product.products);
  return (
    <div>
      {products.map((product) => (
        <div>{product.id}</div>
      ))}
    </div>
  );
};

export default RecommendationPage;
