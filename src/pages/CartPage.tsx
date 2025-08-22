import PrimaryButtonNoGlow from "../components/button/PrimaryButtonNoGlow";
import CartCard from "../components/cart/CartCard";
import AppContainer from "../components/container/AppContainer";
import SectionHeaderNoLinks from "../components/SectionHeaderNoLinks";
import AppLayout from "../layouts/AppLayout";
import type { SectionHeaderNoLinkTypes } from "../utilities/types/appTypes";

const section: SectionHeaderNoLinkTypes = {
  title: "My Cart",
};

const CartPage = () => {
  return (
    <AppLayout>
      <AppContainer>
        <div>
          <SectionHeaderNoLinks section={section} />
          <div className='grid gap-6'>
            <CartCard />
            <PrimaryButtonNoGlow btnText='Clear Cart' />
          </div>
        </div>
      </AppContainer>
    </AppLayout>
  );
};

export default CartPage;
