import FooterTopHeader from "./FooterTopHeader";

const FooterTopPayment = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <FooterTopHeader title='Payment Methods' />
      <div>
        <img
          src='https://esewa.com.np/common/images/esewa_logo.png'
          alt='Esewa Image'
        />
      </div>
    </div>
  );
};

export default FooterTopPayment;
