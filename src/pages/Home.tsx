import CategorySection from "../components/categorySection'/CategorySection";
import HeroSection from '../components/HeroSection';
import RecommendationSection from '../components/recommendationSection/RecommendationSection';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <div>
        <HeroSection />
        <CategorySection />
        <RecommendationSection />
      </div>
    </AppLayout>
  );
};

export default Home;
