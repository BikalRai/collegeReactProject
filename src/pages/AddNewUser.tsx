import PrimaryButtonNoGlow from "../components/button/PrimaryButtonNoGlow";
import Input from "../components/form/Input";
import SectionHeaderNoLinks from "../components/SectionHeaderNoLinks";
import type { FooterHeaderType } from "../utilities/types/appTypes";

const section: FooterHeaderType = {
  title: "Add New User",
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
    <form>
      <SectionHeaderNoLinks section={section} />
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
  );
};

export default AddNewUser;
