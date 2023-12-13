import Image from 'next/image';
import { josefin } from '@/app/fonts';
import classNames from 'classnames';

const Component = () => {
  return (
    <div className='relative'>
      <Image
        src='/images/banner.png'
        width={2000}
        height={1000}
        alt='banner'
        className='w-full h-auto'
      />
      <div className='bg-black absolute top-[30%] left-[20%] w-[562px] h-[453px] flex flex-col items-center justify-center text-center p-[10px]'>
        <h1
          className={classNames(
            'text-[117px] font-bold leading-none tracking-[-8px] uppercase text-white',
            josefin.className
          )}
        >
          Street wears
        </h1>
        <h2 className='text-white text-center text-base uppercase'>
          High quality cool tshirts for street fashion
        </h2>
        <button className='w-[265px] h-11 rounded-[40px] border border-[2px] border-white bg-black text-white uppercase flex gap-[10px] p-4 items-center justify-center mt-[50px] transition-all duration-500 group hover:bg-white hover:text-black'>
          Start shopping{' '}
          <Image
            src='images/iconButton.svg'
            width={22}
            height={19}
            alt=''
            className='transition-all duration-500 group-hover:invert'
          />
        </button>
      </div>
    </div>
  );
};

export default Component;
