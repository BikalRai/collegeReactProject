import PrimaryButtonNoGlow from "../components/button/PrimaryButtonNoGlow";
import Input from "../components/form/Input";
import AdminHeaderWithBack from "../components/headers/AdminHeaderWithBack";
import AdminLayout from "../layouts/AdminLayout";
import type { HeaderWithBackTypes } from "../utilities/types/appTypes";

const section: HeaderWithBackTypes = {
  title: "Add Product",
  btnText: "Back",
};

const formInputs = [
  { name: "name", type: "text", inputPlaceholder: "Enter product name here" },
  { name: "price", type: "text", inputPlaceholder: "Enter price here" },
  { name: "oldPrice", type: "text", inputPlaceholder: "Enter old price here" },
  { name: "quantity", type: "text", inputPlaceholder: "Enter quantity here" },
  { name: "image", type: "file", inputPlaceholder: "upload image" },
  {
    name: "description",
    type: "textarea",
    inputPlaceholder: "Enter description of product",
  },
];

const AdminAddProduct = () => {
  return (
    <AdminLayout>
      <div className='grid gap-5'>
        <AdminHeaderWithBack section={section} backPath='products' />
        <form className='grid gap-6 md:grid-cols-2'>
          {formInputs.map((input, i) => (
            <Input
              key={i}
              name={input.name}
              type={input.type}
              inputPlaceholder={input.inputPlaceholder}
            />
          ))}
        </form>
        <PrimaryButtonNoGlow btnText='Add Product' />
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
