import Link from "next/link";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex justify-between items-center px-5">

            {/* Right */}
          <ul className="flex gap-4">
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/store">فروشگاه</Link>
            </li>
          </ul>

          {/* Left */}
          <div>
            <button>سبد خرید</button>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
