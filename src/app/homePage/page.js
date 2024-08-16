import Image from 'next/image';
import Logo from '../../../public/img/Iridium Logo.png';

const HomePage = () => {
  return (
    <div className='content-center block mx-auto pd'>
      <Image
        src={Logo}
        alt='Logo'
        width={250}
        height={150}
        className='ml-7 mb-2.5'
      />
      <div className='bg-slate-300'>
        <h4 className='text-xl text-black'>
          Site is currently under construction
        </h4>
      </div>
    </div>
  );
};

export default HomePage;
