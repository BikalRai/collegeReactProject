import { useSelector } from "react-redux";
import type { RootState } from "../store";
import AppLayout from "../layouts/AppLayout";
import ProductCard from "../components/ProductCard";
import ProductLayout from "../layouts/ProductLayout";
import AppContainer from "../components/container/AppContainer";
import SectionHeader from "../components/SectionHeader";
import type { SectionHeaderTypes } from "../utilities/types/appTypes";

const recommendationPageHeader: SectionHeaderTypes = {
  title: "Recommendations",
  path: "",
};

const RecommendationPage = () => {
  const products = useSelector((state: RootState) => state.product.products);
  return (
    <AppLayout>
      <AppContainer>
        <SectionHeader section={recommendationPageHeader} />
        <ProductLayout>
          {products
            .filter((product) => product.badge.includes("recommended"))
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductLayout>
      </AppContainer>
    </AppLayout>
  );
};

export default RecommendationPage;
