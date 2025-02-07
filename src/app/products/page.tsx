import { Products } from '@/views/products';
import React, { Suspense } from 'react';

const ProductsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
};

export default ProductsPage;