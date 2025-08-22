import AppContainer from "../components/container/AppContainer";
import AppLayout from "../layouts/AppLayout";
import ProductSpecification from "../components/productPage/ProductSpecification";
import ProductDetails from "../components/productPage/ProductDetails";
// import "swiper/css/pagination";

const ProductPage = () => {
  return (
    <AppLayout>
      <AppContainer>
        <ProductSpecification />
        <ProductDetails />
      </AppContainer>
    </AppLayout>
  );
};

export default ProductPage;
