import DangerButton from "../components/button/DangerButton";
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
            <DangerButton btnText='Clear Cart' />
            <div className='flex flex-col gap-4'>
              <p className='w-fit ms-auto font-medium flex items-center gap-4'>
                <span className='text-sm'>Subtotal:</span>
                <span className='font-black text-xl'>Rs price</span>
              </p>
              <div className='w-fit ms-auto'>
                <PrimaryButtonNoGlow btnText='Proceed to Checkout' />
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </AppLayout>
  );
};

export default CartPage;
