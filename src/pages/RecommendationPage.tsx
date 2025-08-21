import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import AppLayout from '../layouts/AppLayout';
import ProductCard from '../components/ProductCard';
import ProductLayout from '../layouts/ProductLayout';
import AppContainer from '../components/container/AppContainer';
import type { SectionHeaderNoLinkTypes } from '../utilities/types/appTypes';
import SectionHeaderNoLinks from '../components/SectionHeaderNoLinks';

const recommendationPageHeader: SectionHeaderNoLinkTypes = {
  title: 'Recommendations',
};

const RecommendationPage = () => {
  const products = useSelector((state: RootState) => state.product.products);
  return (
    <AppLayout>
      <AppContainer>
        <SectionHeaderNoLinks section={recommendationPageHeader} />
        <ProductLayout>
          {products
            .filter((product) => product.badge.includes('recommended'))
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductLayout>
      </AppContainer>
    </AppLayout>
  );
};

export default RecommendationPage;
