import Image from "next/image";
import Button from "./button/Button";

const CartItem = () => {
  return (
    <div className="flex mt-4 border-b pb-2">
      <Image
        src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={1260}
        height={750}
        alt=""
        className="rounded w-28"
      />

      <div className="mr-4">
        <h3>عنوان محصول</h3>

        <div className="flex gap-3 items-center">
          <Button variant="primary">+</Button>
          <span>{2}</span>
          <Button variant="primary">-</Button>
          <Button variant="danger">Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
