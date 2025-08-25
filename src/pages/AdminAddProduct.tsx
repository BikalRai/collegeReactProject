import { useState } from 'react';
import PrimaryButtonNoGlow from '../components/button/PrimaryButtonNoGlow';
import Input from '../components/form/Input';
import AdminHeaderWithBack from '../components/headers/AdminHeaderWithBack';
import AdminLayout from '../layouts/AdminLayout';
import type { HeaderWithBackTypes } from '../utilities/types/appTypes';
import type { CreateProductPayload } from '../utilities/types/productType';

const section: HeaderWithBackTypes = {
  title: 'Add Product',
  btnText: 'Back',
};

const formInputs = [
  { name: 'name', type: 'text', inputPlaceholder: 'Enter product name here' },
  { name: 'price', type: 'text', inputPlaceholder: 'Enter price here' },
  {
    name: 'discountPrice',
    type: 'text',
    inputPlaceholder: 'Enter old price here',
  },
  { name: 'quantity', type: 'text', inputPlaceholder: 'Enter quantity here' },
  { name: 'images', type: 'file', inputPlaceholder: 'Upload image' },
  {
    name: 'description',
    type: 'textarea',
    inputPlaceholder: 'Enter description of product',
  },
  {
    name: 'categories',
    type: 'select',
    inputPlaceholder: 'Select Categories',
  },
  {
    name: 'badge',
    type: 'checkbox',
    inputPlaceholder: 'Select Badge',
  },
];

const AdminAddProduct = () => {
  const [formData, setFormData] = useState<CreateProductPayload>({
    name: '',
    price: '',
    discountPrice: '',
    quantity: '',
    description: '',
    images: [],
    badge: [],
    categories: 'peripherals',
    onSale: false,
    rating: 0,
    reviews: [],
  });

  const formDataHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        setFormData((prev) => ({
          ...prev,
          [name]: Array.from(files),
        }));
      }
    } else if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const badgeValue = checkbox.value;

      setFormData((prev) => ({
        ...prev,
        badge: checkbox.checked
          ? [...prev.badge, badgeValue]
          : prev.badge.filter((b) => b !== badgeValue),
      }));
    } else if (name === 'categories') {
      // Handle select dropdown
      setFormData((prev) => ({ ...prev, categories: value }));
    } else {
      // Handle regular text inputs and textarea
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  console.log(formData);

  return (
    <AdminLayout>
      <div className="grid gap-5">
        <AdminHeaderWithBack section={section} backPath="products" />
        <form className="grid gap-6 md:grid-cols-2">
          {formInputs.map((input, i) => (
            <Input
              key={i}
              name={input.name}
              type={input.type}
              inputPlaceholder={input.inputPlaceholder}
              inputValue={formData[input.name as keyof CreateProductPayload]}
              inputHandler={formDataHandler}
            />
          ))}
        </form>
        <PrimaryButtonNoGlow btnText="Add Product" />
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
