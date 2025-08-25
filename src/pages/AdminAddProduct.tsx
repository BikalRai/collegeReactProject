import { useState } from "react";
import PrimaryButtonNoGlow from "../components/button/PrimaryButtonNoGlow";
import Input from "../components/form/Input";
import AdminHeaderWithBack from "../components/headers/AdminHeaderWithBack";
import AdminLayout from "../layouts/AdminLayout";
import type { HeaderWithBackTypes } from "../utilities/types/appTypes";
import type { ProductTypes } from "../utilities/types/productType";

const section: HeaderWithBackTypes = {
  title: "Add Product",
  btnText: "Back",
};

const formInputs = [
  { name: "name", type: "text", inputPlaceholder: "Enter product name here" },
  { name: "price", type: "text", inputPlaceholder: "Enter price here" },
  {
    name: "discountPrice",
    type: "text",
    inputPlaceholder: "Enter old price here",
  },
  { name: "quantity", type: "text", inputPlaceholder: "Enter quantity here" },
  { name: "images", type: "file", inputPlaceholder: "Upload image" },
  {
    name: "description",
    type: "textarea",
    inputPlaceholder: "Enter description of product",
  },
  {
    name: "categories",
    type: "select",
    inputPlaceholder: "Select Categories",
  },
  {
    name: "badge",
    type: "checkbox",
    inputPlaceholder: "Select Badge",
  },
];

const AdminAddProduct = () => {
  const [formData, setFormData] = useState<ProductTypes>({
    name: "",
    price: "",
    discountPrice: "",
    images: [],
    badge: [],
    categories: "Peripherals",
    description: "",
    quantity: 0,
    rating: 0,
    onSale: false,
    reviews: [],
  });

  const formDataHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    // Skip file and checkbox here, we handle them via callbacks
    if (type === "file" || type === "checkbox") return;

    if (name === "quantity") {
      setFormData((prev) => ({ ...prev, quantity: parseInt(value) || 0 }));
    } else if (name === "categories") {
      setFormData((prev) => ({ ...prev, categories: value }));
    } else {
      // Regular text/textarea
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImages = (images: string[]) => {
    setFormData((prev) => ({ ...prev, images }));
  };

  const handleBadges = (badges: number[]) => {
    setFormData((prev) => ({ ...prev, badge: badges }));
  };

  console.log(formData);

  return (
    <AdminLayout>
      <div className='grid gap-5'>
        <AdminHeaderWithBack section={section} backPath='products' />
        <form className='grid gap-6 md:grid-cols-2'>
          {formInputs.map((input, i) => {
            const value = formData[input.name as keyof ProductTypes];

            // Narrow type for Input
            let inputValue: string | number = "";
            if (typeof value === "string" || typeof value === "number") {
              inputValue = value;
            }

            return (
              <Input
                key={i}
                name={input.name}
                type={input.type}
                inputPlaceholder={input.inputPlaceholder}
                inputValue={inputValue}
                inputHandler={formDataHandler}
                onImagesChange={
                  input.type === "file" ? handleImages : undefined
                }
                onBadgesChange={
                  input.type === "checkbox" ? handleBadges : undefined
                }
              />
            );
          })}
        </form>
        <PrimaryButtonNoGlow btnText='Add Product' />
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
