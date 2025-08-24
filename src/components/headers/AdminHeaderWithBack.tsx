import { useNavigate } from "react-router-dom";
import type { HeaderWithBackTypes } from "../../utilities/types/appTypes";

interface PropTypes {
  section: HeaderWithBackTypes;
  backPath: string;
}

const AdminHeaderWithBack = ({ section, backPath }: PropTypes) => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between mb-6 lg:mb-12'>
      <h1 className='text-2xl afer:conent[""] after:h-1 after:block after:w-full after:bg-primary after:mt-3.5'>
        {section.title}
      </h1>
      <button
        onClick={() => navigate(`/${backPath}`)}
        className='px-4 transition-colors cursor-pointer hover:text-primary'
      >
        {section.btnText}
      </button>
    </div>
  );
};

export default AdminHeaderWithBack;
