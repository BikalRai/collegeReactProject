import { useSelector } from "react-redux";
import AppContainer from "../components/container/AppContainer";
import AppLayout from "../layouts/AppLayout";
import ProductLayout from "../layouts/ProductLayout";
import type { SectionHeaderNoLinkTypes } from "../utilities/types/appTypes";
import type { RootState } from "../store/store";
import ProductCard from "../components/ProductCard";
import SectionHeaderNoLinks from "../components/headers/SectionHeaderNoLinks";

const shopHeader: SectionHeaderNoLinkTypes = {
  title: "Shop",
};

const ShopPage = () => {
  const products = useSelector((state: RootState) => state.product.products);
  return (
    <AppLayout>
      <AppContainer>
        <SectionHeaderNoLinks section={shopHeader} />
        <ProductLayout>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductLayout>
      </AppContainer>
    </AppLayout>
  );
};

export default ShopPage;
