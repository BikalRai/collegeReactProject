import AppContainer from "../container/AppContainer";
import type { SectionHeaderTypes } from "../../utilities/types/appTypes";

import ProductCard from "../ProductCard";

import ProductLayout from "../../layouts/ProductLayout";
import SectionHeader from "../headers/SectionHeader";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../slices/productSlice";

const recommendation: SectionHeaderTypes = {
  title: "BitYeti Recommends",
  path: "/shop/recommendations",
};

const RecommendationSection = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log({ products });

  return (
    <AppContainer>
      <div>
        <SectionHeader section={recommendation} />
        <ProductLayout>
          {loading ? (
            <p>Loading....</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            products
              .filter((product) => product.badge.includes("recommended"))
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          )}
        </ProductLayout>
      </div>
    </AppContainer>
  );
};

export default RecommendationSection;
