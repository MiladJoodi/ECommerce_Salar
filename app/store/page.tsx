import Container from "@/components/container/Container";
import ProductItem from "@/components/productItem/ProductItem";

const Store = () => {
  return (
    <div>
      <Container>
        <h1 className="mt-5">صفحه ی محصولات</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </div>
  );
};

export default Store;
