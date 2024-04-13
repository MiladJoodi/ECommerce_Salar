import Container from "@/components/container/Container";
import ProductItem from "@/components/productItem/ProductItem";
import Link from "next/link";

const Store = () => {
  return (
    <div>
      <Container>
        <h1 className="mt-5 text-lg">صفحه ی محصولات</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Link href={`/product/${1}`}>
            <ProductItem />
          </Link>

          <Link href={`/product/${2}`}>
            <ProductItem />
          </Link>

          <Link href={`/product/${3}`}>
            <ProductItem />
          </Link>

          <Link href={`/product/${4}`}>
            <ProductItem />
          </Link>

          <Link href={`/product/${5}`}>
            <ProductItem />
          </Link>


          
        </div>
      </Container>
    </div>
  );
};

export default Store;
