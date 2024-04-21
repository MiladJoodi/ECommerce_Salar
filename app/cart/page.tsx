import Button from "@/components/button/Button";
import CartItem from "@/components/cartItem";
import Container from "@/components/container/Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

const Cart = () => {

  const {cartItems} = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div>
          <CartItem />
          <CartItem />
        </div>

        <div className="bg-gray-200 rounded p-6">
          <p>قیمت کل: 1,000</p>
          <p>تخفیف شما: 200</p>
          <p>قیمت نهایی: 800</p>
        </div>

        <div className="text-left">
          <Button variant="success" className="mt-2 ">
            ثبت سفارش
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
