import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import type { SectionHeaderTypes } from '../utilities/types/appTypes';

interface SectionHeaderPropTypes {
  section: SectionHeaderTypes;
}

const SectionHeader: React.FC<SectionHeaderPropTypes> = ({ section }) => {
  return (
    <div className="flex items-center justify-between mt-20">
      <h1 className='afer:conent[""] after:h-0.5 after:block after:w-full after:bg-primary after:mt-3.5'>
        {section.title}
      </h1>
      <Link
        to={section.path}
        className="flex items-center gap-2 transition hover:text-primary"
      >
        <span>More</span>
        <span className="text-primary">
          <FaChevronRight />
        </span>
      </Link>
    </div>
  );
};

export default SectionHeader;
