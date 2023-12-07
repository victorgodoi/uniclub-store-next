// import styled from 'styled-components'
// import carrinho from '../images/carrinho.svg'
// import cifrao from '../images/cifrao.svg'
// import escudo from '../images/escudo.svg'
// import medalha from '../images/medalha.svg'
// import Content from './Content'

import { josefin } from "@/app/fonts"
import classNames from "classnames"
import Image from "next/image"
import Content from 'src/components/Content'


// const Title = styled.p`
//     color: #222;
//     font-size: 24px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: 119.682%;
//     text-transform: capitalize;
//     margin-top: 30px;
//     margin-bottom: 20px;
// `

// const SubTitle = styled.p`
//     color: #747474;
//     font-family: Jost;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 188.5%;
//     letter-spacing: 0.32px;
//     text-transform: capitalize;
// `

// const Box = styled(Content)`
//     padding-top: 170px;
//     //tirar depois
//     margin-bottom: 150px;

//     > div {
//         gap: 110px;
//     }
// `


const Component = () => {
    return (
        <Content className='pt-[170px] mb-[150px]'>
            <div className="gap-[110px]">
                <Image src='images/carrinho.svg' width={35} height={35} />
                <p className={classNames("text-lightBlack text-2xl not-italic font-semibold leading-[119.682%] capitalize mt-8 mb-5", josefin.className)}>Free Delivery</p>
                <p className="text-grey2 text-base not-italic font-normal leading-[188.5%] tracking-[0.32px] capitalize">Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</p>
            </div>
            <div className="gap-[110px]">
                <Image src='images/escudo.svg' width={35} height={35} />
                <p className={classNames("text-lightBlack text-2xl not-italic font-semibold leading-[119.682%] capitalize mt-8 mb-5", josefin.className)}>100% secure payment</p>
                <p className="text-grey2 text-base not-italic font-normal leading-[188.5%] tracking-[0.32px] capitalize">Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</p>
            </div>
            <div className="gap-[110px]">
                <Image src='images/medalha.svg' width={35} height={35} />
                <p className={classNames("text-lightBlack text-2xl not-italic font-semibold leading-[119.682%] capitalize mt-8 mb-5", josefin.className)}>Quality guarantee</p>
                <p className="text-grey2 text-base not-italic font-normal leading-[188.5%] tracking-[0.32px] capitalize">Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</p>
            </div>
            <div className="gap-[110px]">
                <Image src='images/cifrao.svg' width={35} height={35} />
                <p className={classNames("text-lightBlack text-2xl not-italic font-semibold leading-[119.682%] capitalize mt-8 mb-5", josefin.className)}>guaranteed savings</p>
                <p className="text-grey2 text-base not-italic font-normal leading-[188.5%] tracking-[0.32px] capitalize">Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</p>
            </div>
        </Content>


        // <Box>
        //     <div>
        //         <img src={carrinho} width='35px' height='35px' />
        //         <Title>Free Delivery</Title>
        //         <SubTitle>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</SubTitle>
        //     </div>
        //     <div>
        //         <img src={escudo} width='35px' height='35px' />
        //         <Title>100% secure payment</Title>
        //         <SubTitle>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</SubTitle>
        //     </div>
        //     <div>
        //         <img src={medalha} width='35px' height='35px' />
        //         <Title>Quality guarantee</Title>
        //         <SubTitle>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</SubTitle>
        //     </div>
        //     <div>
        //         <img src={cifrao} width='35px' height='35px' />
        //         <Title>guaranteed savings</Title>
        //         <SubTitle>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</SubTitle>
        //     </div>
        // </Box>
    )
}

export default Component