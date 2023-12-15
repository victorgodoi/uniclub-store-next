// import styled from "styled-components";
// import Banner from "../images/BannerBox5.png"
// import Button from "./Button";

import { josefin, playfair } from "@/app/fonts";
import classNames from "classnames";
import Button from "./Button";

// const DivBox = styled.div`
//     background-image: url(${Banner});
//     background-repeat: no-repeat;
//     background-position: center center;
//     background-size: cover;
//     height: 500px;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

const Component = () => {
  return (
    //falta o background-image
    <div className="bg-bannerBox05 bg-no-repeat bg-center bg-cover h-[500px] w-full flex items-center justify-center">
      <div className="h-[500px] w-full flex items-center justify-center">
        <div className="w-[990px] flex gap-[185px]">
          <div>
            <p
              className={classNames(
                "text-white text-[52px] leading-tight tracking-[-2.6px]",
                playfair.className
              )}
            >
              Get 20% <span className="font-bold italic">OFF</span> on your
              first purchase
            </p>
            <p className="mt-5 text-grey3 leading-normal">
              Sign Up for our newsletter and never miss any offers
            </p>
          </div>
          <div>
            <input
              className="rounded-lg border-input w-[350px] h-[57px] px-[10px] text-base outline-none"
              placeholder="Your email address"
            ></input>
            <Button className="mt-6 w-[350px]">Subscribe now</Button>
          </div>
        </div>
      </div>
    </div>

    // <DivBox>
    //     <DivContent>
    //         <div>
    //             <Title>Get 20% <span>OFF</span> on your first purchase</Title>
    //             <SubTitle>Sign Up for our newsletter and never miss any offers</SubTitle>
    //         </div>
    //         <div>
    //             <Input placeholder="Your email address" />
    //             <Button02>Subscribe now</Button02>
    //         </div>
    //     </DivContent>
    // </DivBox>
  );
};

export default Component;
