import React, { useEffect, useState } from "react";
import shopData from "../ShopProduct/shopdata.json";
// import ShopCard from "./shopCard";

const allBrandvalues = [...new Set(shopData.map((curBrand) => curBrand.brand))];

const BrandCheckbox = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState(shopData);

  useEffect(() => {
    const filtered = shopData.filter((brand) =>
      selectedBrands.includes(brand.brand)
    );
    setFilteredBrands(filtered);
  }, [selectedBrands]);
  // console.log(filteredBrands);
  return (
    <>
      <ul className="catagories-by-brands">
        {allBrandvalues.map((curItem, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                name={curItem}
                id={curItem}
                value={curItem}
                checked={selectedBrands.includes(curItem)}
                onChange={(e) => {
                  const { value, checked } = e.target;
                  setSelectedBrands((prevBrand) => {
                    if (checked) {
                      return [...prevBrand, value];
                    } else {
                      return prevBrand.filter((filter) => filter !== value);
                    }
                  });
                }}
              />
              <label htmlFor={curItem}>{curItem}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BrandCheckbox;
