import AppContainer from "../components/container/AppContainer";
import QuantityCounter from "../components/QuantityCounter";
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
          <div className='flex gap-5 bg-cardbg p-4 rounded-2xl'>
            <div className='h-24 w-24 border rounded-xl overflow-hidden'>
              <img src='' alt='' />
            </div>
            <div className='grow flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between'>
              <h4>Product name</h4>
              <div className='flex items-center justify-between lg:flex-col'>
                <p>Rs product price</p>
                <p className='line-through text-muted'>Rs discounted price</p>
              </div>
              <QuantityCounter />
            </div>
          </div>
        </div>
      </AppContainer>
    </AppLayout>
  );
};

export default CartPage;
