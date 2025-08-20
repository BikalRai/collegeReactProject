import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className='bg-cardbg-light rounded-2xl overflow-hidden transition-transform hover:-translate-y-3'>
      <div className='h-[160px] overflow-hidden rounded-tl-2xl rounded-tr-2xl'>
        <img
          src=''
          alt='Blog image'
          className='w-full h-full object-cover object-center'
        />
      </div>
      <div className='text-muted font-semibold grid gap-4 p-4'>
        <h3>
          <span>Category</span>
          <span>Date</span>
        </h3>
        <h3 className='text-cardbg'>Tile of the blog</h3>
        <p className='text-sm font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in
          aliquid, quibusdam id provident quam nam doloremque tenetur inventore
          ut, adipisci vero est possimus hic delectus odit. Nihil quaerat animi,
          quos accusantium libero necessitatibus neque. Maiores a quisquam autem
          eaque doloribus facere, accusamus voluptatem ab aliquam obcaecati
          aspernatur tempore voluptatum!
        </p>
        <Link
          to=''
          className='uppercase text-primary transition-colors hover:text-muted'
        >
          continue reading
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
