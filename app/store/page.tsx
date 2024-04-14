import Container from "@/components/container/Container";
import ProductItem from "@/components/productItem/ProductItem";
import { getProducts } from "@/services/api";
import { Products } from "@/types/server";
import Link from "next/link";



const Store = async () => {
  // Axios
  const products: Products[] = await getProducts();
  // console.log(products[0].rating);

  return (
    <div>
      <Container>
        <h1 className="mt-5 text-lg">صفحه ی محصولات</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Store;
