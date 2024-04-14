// "use client"
import AddToCardButton from "@/components/addToCartButton/AddToCardButton";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import { getProduct } from "@/services/api";
import Image from "next/image";

const Single = async ({ params }: { params: { id: string } }) => {
  console.log( params.id );

  const data = await getProduct(params.id as string)
  console.log(data)

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="bg-sky-200 col-span-2 p-4">
            <Image
              src={data.image}
              width={1260}
              height={750}
              alt=""
              className="rounded"
            />

            <AddToCardButton />

          </div>

          <div className="bg-amber-100 col-span-10 p-4">
            <h1>{data.title}</h1>
            <div>
              <p>قیمت: {data.price}$</p>
              <p>
              {data.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Single;
