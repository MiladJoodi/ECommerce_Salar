import Image from "next/image";
import { Products } from "@/types/server";

type ProductItem = Products;

const ProductItem = ({title, price, description, image}: ProductItem) => {
  return (
    <div className="shadow border rounded pb-2">
      <div className="">
        <Image
          src={image}
          width={1260}
          height={750}
          alt=""
          className="rounded-t h-[400px]"
        />
      </div>
      <div className="flex justify-between p-4">
        <span>{price}$</span>
        <h3 className="line-clamp-1">{title}</h3>
      </div>
      {/* Description */}
      <div className="px-4 mt-1 text-left">
            <p className="line-clamp-2">
            {description}
            </p>
      </div>
      {/* Description */}

    </div>
  );
};

export default ProductItem;
