import ProductView from '@/views/product';
import { ProductType } from '@/types/product.type';

const ProductPage = ({ products }: { products: ProductType[] }) => {
 return (
  <div>
   <ProductView products={products} />
  </div>
 );
};

export default ProductPage;

// dipanggil setiap melakukan request
export async function getServerSideProps() {
 // fetch data
 const res = await fetch('http://localhost:3000/api/product');
 const response = await res.json();

 return {
  props: {
   products: response.data,
  },
 };
}