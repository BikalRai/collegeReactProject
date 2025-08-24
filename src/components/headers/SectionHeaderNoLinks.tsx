import type { SectionHeaderNoLinkTypes } from "../utilities/types/appTypes";

interface SectionPropTypes {
  section: SectionHeaderNoLinkTypes;
}

const SectionHeaderNoLinks: React.FC<SectionPropTypes> = ({ section }) => {
  return (
    <div className='flex items-center justify-between mt-20 mb-12'>
      <h1 className='text-2xl afer:conent[""] after:h-0.5 after:block after:w-full after:bg-primary after:mt-3.5'>
        {section.title}
      </h1>
    </div>
  );
};

export default SectionHeaderNoLinks;
