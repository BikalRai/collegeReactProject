import BlogCard from "./BlogCard";
import AppContainer from "./container/AppContainer";
import SectionHeader from "./headers/SectionHeader";

const section = {
  title: "Blogs",
  path: "",
};

const BlogsSection = () => {
  return (
    <AppContainer>
      <SectionHeader section={section} />
      <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </AppContainer>
  );
};

export default BlogsSection;
