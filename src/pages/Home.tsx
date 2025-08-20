import BlogsSection from "../components/BlogsSection";
import CategorySection from "../components/categorySection'/CategorySection";
import HeroSection from "../components/HeroSection";
import RecommendationSection from "../components/recommendationSection/RecommendationSection";
import TopRatedSection from "../components/TopRatedSection";
import AppLayout from "../layouts/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div>
        <HeroSection />
        <CategorySection />
        <RecommendationSection />
        <TopRatedSection />
        <BlogsSection />
      </div>
    </AppLayout>
  );
};

export default Home;
