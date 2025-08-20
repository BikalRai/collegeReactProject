import AppContainer from "../container/AppContainer";
import type { SectionHeaderTypes } from "../../utilities/types/appTypes";
import SectionHeader from "../SectionHeader";
import ProductCard from "../ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import axios from "axios";
import { BASE_URL } from "../../utilities/base_url";
import { setAllProducts } from "../../slices/productSlice";

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
        console.log(res);
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
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
          {products
            .filter((product) => product.badge.includes("recommended"))
            .slice(0, 5)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </AppContainer>
  );
};

export default RecommendationSection;
