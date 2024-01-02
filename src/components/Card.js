// import styled from "styled-components";
// import { Skeleton } from '@chakra-ui/react'

import Image from "next/image";

// const Box = styled.div`
//     max-width: 295px;
//     gap: 40px 25px;
// `
// const MiniBox = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin-top: 20px;
// `
// const Text = styled.p`
//     color: #000;
//     font-size: 21px;
//     text-transform: capitalize;
// `
// const Number = styled.p`
//     color: #747474;
//     font-size: 21px;
//     text-transform: capitalize;
// `

const Component = ({ text, preco, img, loading }) => {
  if (loading) {
    return (
      <div className="max-w-[295px] gap-y-10 gap-x-[25px]"></div>
      // <Box>
      //     <Skeleton height='440px' width='290px' />
      //     <MiniBox>
      //         <Skeleton height='31px' width='60%' />
      //         <Skeleton height='31px' width='20%' />
      //     </MiniBox>
      // </Box>
    );
  } else {
    return (
      <div className="max-w-[295px] gap-y-10 gap-x-[25px]">
        <Image src={img} width={298} height={446} alt={text} />
        <div className="flex justify-between mt-5">
          <p className="text-black text-xl capitalize">{text}</p>
          <p className="text-grey2 text-xl capitalize">
            R${preco?.toFixed(2)?.replace(".", ",")}
          </p>
        </div>
      </div>
    );
  }
};

export default Component;
