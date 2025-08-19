import HeroSection from '../components/HeroSection';
import LineSeparator from '../components/LineSeparator';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <div>
        <HeroSection />
        {/* <LineSeparator /> */}
      </div>
    </AppLayout>
  );
};

export default Home;
