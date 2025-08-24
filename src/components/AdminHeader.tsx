import { Link } from "react-router-dom";
import type { SectionHeaderTypes } from "../utilities/types/appTypes";
import PrimaryButtonNoGlow from "./button/PrimaryButtonNoGlow";

interface SectionType {
  section: SectionHeaderTypes;
}

const AdminHeader = ({ section }: SectionType) => {
  return (
    <div className='flex items-center justify-between mb-6 lg:mb-12'>
      <h1 className='text-2xl afer:conent[""] after:h-1 after:block after:w-full after:bg-primary after:mt-3.5'>
        {section.title}
      </h1>
      <Link to={`/users/${section.path}`}>
        <PrimaryButtonNoGlow btnText='Add New' />
      </Link>
    </div>
  );
};

export default AdminHeader;
