import AppContainer from "../container/AppContainer";
import type { SectionHeaderTypes } from "../../utilities/types/appTypes";

import ProductCard from "../ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import axios from "axios";
import { BASE_URL } from "../../utilities/base_url";
import { setAllProducts } from "../../slices/productSlice";
import ProductLayout from "../../layouts/ProductLayout";
import SectionHeader from "../headers/SectionHeader";

const recommendation: SectionHeaderTypes = {
  title: "BitYeti Recommends",
  path: "/recommendations",
};

const RecommendationSection = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/products`);
        dispatch(setAllProducts(res.data));
      } catch (error) {
        console.error("Error fetching all products from db.json", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <AppContainer>
      <div>
        <SectionHeader section={recommendation} />
        <ProductLayout>
          {products
            .filter((product) => product.badge.includes("recommended"))
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductLayout>
      </div>
    </AppContainer>
  );
};

export default RecommendationSection;
