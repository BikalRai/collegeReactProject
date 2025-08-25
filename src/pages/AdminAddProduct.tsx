import { useEffect, useState } from "react";
import PrimaryButtonNoGlow from "../components/button/PrimaryButtonNoGlow";
import Input from "../components/form/Input";
import AdminHeaderWithBack from "../components/headers/AdminHeaderWithBack";
import AdminLayout from "../layouts/AdminLayout";
import type { HeaderWithBackTypes } from "../utilities/types/appTypes";
import type { ProductTypes } from "../utilities/types/productType";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductFailure,
  addProductRequest,
  addProductSuccess,
  updateProductFailure,
  updateProductRequest,
  updateProductSuccess,
} from "../slices/productSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../store/store";

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

  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.product);

  const navigate = useNavigate();

  const { loading } = useSelector((state: RootState) => state.product);

  const { productId } = useParams();
  const editMode = Boolean(productId);

  useEffect(() => {
    if (editMode) {
      const product = products.find((product) => product.id === productId);

      if (product) {
        setFormData(product);
      }
    }
  }, [productId]);

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

  const uploadImagesToCloudinary = async (images: string[]) => {
    const uploadUrls: string[] = [];

    for (const img of images) {
      try {
        const file = await fetch(img).then((res) => res.blob());
        const cloudForm = new FormData();
        cloudForm.append("file", file);
        cloudForm.append(
          "upload_preset",
          `${import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET}`
        );

        const res = await axios.post(
          `${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}`,
          cloudForm
        );

        uploadUrls.push(res.data.secure_url);
      } catch (error) {
        console.error("Error uploading iamges", error);
      }
    }
    return uploadUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addProductRequest());

    try {
      const uploadedImagesUrl = await uploadImagesToCloudinary(formData.images);

      const payload: ProductTypes = {
        ...formData,
        images: uploadedImagesUrl,
        id: uuidv4(),
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/products`,
        payload
      );

      if (res.status === 201) {
        dispatch(addProductSuccess(payload));
        setFormData({
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
        navigate("/products");
      }
    } catch (error) {
      dispatch(addProductFailure("Failed to add product"));
      console.error(error);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateProductRequest());

    try {
      const uploadedImagesUrl = await uploadImagesToCloudinary(formData.images);
      const payload: ProductTypes = {
        ...formData,
        images: uploadedImagesUrl,
        id: productId,
      };

      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/products/${productId}`,
        payload
      );

      if (res.status === 200) {
        dispatch(updateProductSuccess(payload));
        navigate("/products");
      }
    } catch (error) {
      dispatch(updateProductFailure("Failed to update product"));
      console.error(error);
    }
  };

  console.log(formData);

  return (
    <AdminLayout>
      <div className='grid gap-5'>
        <AdminHeaderWithBack section={section} backPath='products' />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <form
              className='grid gap-6 md:grid-cols-2'
              onSubmit={editMode ? handleUpdate : handleSubmit}
            >
              {formInputs.map((input, i) => {
                const value = formData[input.name as keyof ProductTypes];
                let inputValue: string | number | string[] | number[] = "";
                if (typeof value === "string" || typeof value === "number") {
                  inputValue = value;
                } else if (Array.isArray(value)) {
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
              <div className='w-fit'>
                <PrimaryButtonNoGlow
                  btnText={editMode ? "Update" : "Add Product"}
                  type='submit'
                />
              </div>
            </form>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
