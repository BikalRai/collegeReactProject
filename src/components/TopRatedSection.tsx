import { useSelector } from "react-redux";
import ProductLayout from "../layouts/ProductLayout";
import type { RootState } from "../store/store";
import ProductCard from "./ProductCard";
import AppContainer from "./container/AppContainer";
import type { SectionHeaderTypes } from "../utilities/types/appTypes";
import SectionHeader from "./headers/SectionHeader";

const TopRatedSectionDetails: SectionHeaderTypes = {
  title: "Top Rated",
  path: "/topRated",
};

const TopRatedSection = () => {
  const { products } = useSelector((state: RootState) => state.product);

  return (
    <AppContainer>
      <SectionHeader section={TopRatedSectionDetails} />
      <ProductLayout>
        {products
          .filter((product) => product.badge.includes("topRated"))
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductLayout>
    </AppContainer>
  );
};

export default TopRatedSection;
