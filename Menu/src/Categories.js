import React, { useState } from "react";
import { GlobalContext } from "./Context";

const Categories = () => {
  const { categories, filter } = GlobalContext();
  const [activeCat, setActiveCat] = useState(0);

  const handleCat = (cat, index) => {
    filter(cat);
    setActiveCat(index)
  }

  return (
    <div className="btn-container">
      {
        categories.map((categoryAll, index) => {
          return <button type="button" key={index} onClick={() => handleCat(categoryAll, index)} className={`filter-btn ${activeCat === index ? 'active' : '' }`}> {categoryAll} </button>
        })
      }
    </div>
  );
};

export default Categories;
