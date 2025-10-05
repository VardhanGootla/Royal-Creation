import React from 'react';
import { useLocation } from 'react-router-dom';
import SubCategoryPage from './SubCategoryPage';
import { subcategoryData } from './subcategoryData';

const SubCategory = () => {
  const location = useLocation();
  const subcategory = subcategoryData[location.pathname];

  if (!subcategory) {
    return <div>Subcategory not found</div>;
  }

  return <SubCategoryPage subcategory={subcategory} />;
};

export default SubCategory;
