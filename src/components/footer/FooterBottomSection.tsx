import LineSeparator from "../LineSeparator";

const FooterBottomSection = () => {
  return (
    <div className='text-center mt-12'>
      <LineSeparator />
      <p className='pt-5'>
        &copy;Copyright, BitYeti&trade; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default FooterBottomSection;
