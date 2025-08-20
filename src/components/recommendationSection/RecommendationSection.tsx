import AppContainer from '../container/AppContainer';
import type { SectionHeaderTypes } from '../../utilities/types/appTypes';
import SectionHeader from '../SectionHeader';

const recommendation: SectionHeaderTypes = {
  title: 'BitYeti Recommends',
  path: '/recommendations',
};

const RecommendationSection = () => {
  return (
    <AppContainer>
      <div>
        <SectionHeader section={recommendation} />
      </div>
    </AppContainer>
  );
};

export default RecommendationSection;
