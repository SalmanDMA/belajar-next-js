import ProductView from '@/views/product';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/fetcher';

const ProductPage = () => {
 // const [products, productsSet] = useState([]);
 const { push } = useRouter();

 const { data, error, isLoading } = useSWR('/api/product', fetcher);

 // useEffect(() => {
 //  fetch('/api/product').then((res) => {
 //   res.json().then((response) => {
 //    productsSet(response.data);
 //   });
 //  });
 // }, []);

 return (
  <div>
   <ProductView products={isLoading ? [] : data?.data} />
  </div>
 );
};

export default ProductPage;
