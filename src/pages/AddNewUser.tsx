import PrimaryButtonNoGlow from "../components/button/PrimaryButtonNoGlow";
import Input from "../components/form/Input";
import AdminHeaderWithBack from "../components/headers/AdminHeaderWithBack";
import AdminLayout from "../layouts/AdminLayout";
import type { HeaderWithBackTypes } from "../utilities/types/appTypes";

const section: HeaderWithBackTypes = {
  title: "Add New User",
  btnText: "Back",
};

const formInputs = [
  { name: "name", type: "text", inputPlaceholder: "Enter name here" },
  { name: "email", type: "email", inputPlaceholder: "Enter email here" },
  { name: "phone", type: "text", inputPlaceholder: "Enter phone here" },
  { name: "address", type: "text", inputPlaceholder: "Enter address here" },
  { name: "Image", type: "file", inputPlaceholder: "upload image" },
];

const AddNewUser = () => {
  return (
    <AdminLayout>
      <form>
        <AdminHeaderWithBack section={section} backPath='users' />
        <div className='grid gap-5 md:grid-cols-2'>
          {formInputs.map((input, i) => (
            <Input
              key={i}
              name={input.name}
              type={input.type}
              inputPlaceholder={input.inputPlaceholder}
            />
          ))}
        </div>
        <div className='mt-5'>
          <PrimaryButtonNoGlow btnText='Submit' />
        </div>
      </form>
    </AdminLayout>
  );
};

export default AddNewUser;
