import { josefin } from '@/app/fonts';
import classNames from 'classnames';
import Image from 'next/image';
import Content from 'src/components/Content';

const Component = () => {
  return (
    <Content className='pt-[170px] mb-[150px]'>
      <div className='gap-[110px]'>
        <Image
          src='images/carrinho.svg'
          alt='carrinho'
          width={35}
          height={35}
        />
        <p
          className={classNames(
            'text-lightBlack text-2xl not-italic font-semibold leading-[119.682%] capitalize mt-8 mb-5',
            josefin.className
          )}
        >
          Free Delivery
        </p>
        <p className='text-grey2 text-base not-italic font-normal leading-[188.5%] tracking-[0.32px] capitalize'>
          Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit
          amet.
        </p>
      </div>
      <div className='gap-[110px]'>
        <Image src='images/escudo.svg' alt='escudo' width={35} height={35} />
        <p
          className={classNames(
            'text-lightBlack text-2xl not-italic font-semibold leading-[119.682%] capitalize mt-8 mb-5',
            josefin.className
          )}
        >
          100% secure payment
        </p>
        <p className='text-grey2 text-base not-italic font-normal leading-[188.5%] tracking-[0.32px] capitalize'>
          Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit
          amet.
        </p>
      </div>
      <div className='gap-[110px]'>
        <Image src='images/medalha.svg' alt='medalha' width={35} height={35} />
        <p
          className={classNames(
            'text-lightBlack text-2xl not-italic font-semibold leading-[119.682%] capitalize mt-8 mb-5',
            josefin.className
          )}
        >
          Quality guarantee
        </p>
        <p className='text-grey2 text-base not-italic font-normal leading-[188.5%] tracking-[0.32px] capitalize'>
          Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit
          amet.
        </p>
      </div>
      <div className='gap-[110px]'>
        <Image src='images/cifrao.svg' alt='cifrao' width={35} height={35} />
        <p
          className={classNames(
            'text-lightBlack text-2xl not-italic font-semibold leading-[119.682%] capitalize mt-8 mb-5',
            josefin.className
          )}
        >
          guaranteed savings
        </p>
        <p className='text-grey2 text-base not-italic font-normal leading-[188.5%] tracking-[0.32px] capitalize'>
          Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit
          amet.
        </p>
      </div>
    </Content>
  );
};

export default Component;
