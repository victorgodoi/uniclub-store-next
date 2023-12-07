import styled from 'styled-components'
import imgBanner from '../images/banner.png'
import iconButton from '../images/iconButton.svg'
import Image from 'next/image'
import { josefin } from "@/app/fonts"
import classNames from 'classnames'


//     h2 {
//         color: #FFF;
//         text-align: center;
//         font-family: 'Jost';
//         font-size: 16px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: normal;
//ver se leading-normal é igual line-height: normal
//         text-transform: uppercase;  
//     }
// `



//     &:hover {
//         cursor: pointer;
//         color: #000;
//         background-color: #FFF;

//colocar o filter na image
//         img{
//             filter: invert(1);
//         }
//     }

//     img {
//         width: 22px;
//         height: 19px;
//         transition: all 0.5s;
//     }

// const Button = styled.button`
//     width: 265px;
//     height: 44px;
//     border-radius: 40px;
//     border: 2px solid #FFF;
//     background-color: black;
//     color: #FFF;
//     font-size: 15px;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     display: flex;
//     gap:10px;
//     padding: 15px;
//     align-items: center;
//     justify-content: center;
//     margin-top: 50px;
//     transition: all 0.5s;


const Component = () => {
    return (
        <div>
            <Image src='images/banner.png' width={full} height={auto} />
            <div className='bg-black absolute top-[5%] left-[15%] w-[562px] h-[453px] flex flex-col items-center justify-center text-center p-[10%]'>
                <h1 className={classNames('text-[117px] not-italic font-bold leading-full tracking-[-11.7px] uppercase text-white', josefin.className)}>Street wears</h1>
                <h2 className='text-white text-center text-base not-italic font-normal leading-normal uppercase'>High quality cool tshirts for street fashion</h2>
                {/* terminar o botao */}
                <button className=''>Start shopping <Image src='images/iconButton.svg' width={22} height={19} alt='' className='transition-all duration-500' /></button>
            </div>
        </div>
        // <div>
        //     <img src={imgBanner} width='100%' height='auto' />
        //     <Box>
        //         <h1>Street wears</h1>
        //         <h2>High quality cool tshirts for street fashion</h2>
        //         <Button>Start shopping <img src={iconButton} /></Button>
        //     </Box>
        // </div>
    )
}

export default Component