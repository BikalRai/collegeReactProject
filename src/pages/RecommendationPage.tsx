import type { RootState } from "../store/store";
import AppLayout from "../layouts/AppLayout";
import ProductCard from "../components/ProductCard";
import ProductLayout from "../layouts/ProductLayout";
import AppContainer from "../components/container/AppContainer";
import type { SectionHeaderNoLinkTypes } from "../utilities/types/appTypes";
import SectionHeaderNoLinks from "../components/headers/SectionHeaderNoLinks";
import { useEffect } from "react";
import { fetchProducts } from "../slices/productSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const recommendationPageHeader: SectionHeaderNoLinkTypes = {
  title: "Recommendations",
};

const RecommendationPage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <AppLayout>
      <AppContainer>
        <SectionHeaderNoLinks section={recommendationPageHeader} />
        <ProductLayout>
          {loading ? (
            <p>Loading....</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            products
              .filter((product) => product.badge.includes("recommended"))
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          )}
        </ProductLayout>
      </AppContainer>
    </AppLayout>
  );
};

export default RecommendationPage;
