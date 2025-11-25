import React, { useEffect, useState } from "react";
import CatagoriesNab from "./CatagoriesNab";
import ProductCard from "./ProductCard";
import CardSlider from "./CardSlider";
import toast from "react-hot-toast";
import { useLocation } from "react-router";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectCategory, setSelectCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        toast.success("Products Loaded!");
      })
      .catch(() => toast.error("Failed To Load Products!"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = product;

    
    if (selectCategory !== "All") {
      filtered = filtered.filter(
        (p) => p.category === selectCategory
      );
    }

   
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [product, selectCategory, searchQuery]);

  const categories = ["All", ...new Set(product.map((d) => d.category))];

 
  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);


  const topRated = product.filter((p) => p.rating > 7);

  return (
    <div className="w-11/12 mx-auto py-15">
      <h1 className="text-lg lg:text-xl text-[#ff6633]">RECOMMENDED FOR YOU</h1>

      <CatagoriesNab
        catagories={categories}
        selectCategory={selectCategory}
        setselectCategory={setSelectCategory}
      />

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <span className="loading loading-dots loading-lg text-yellow-500"></span>
          <span className="loading loading-dots loading-xl text-yellow-500"></span>
        </div>
      ) : filteredProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length > 8 && (
            <div className="flex justify-center mt-7">
              <button
                className="px-5 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-300 transition-all duration-300"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-400 text-center">No Products Found</p>
      )}

      <CardSlider moviecard={topRated} />
    </div>
  );
};

export default Products;
