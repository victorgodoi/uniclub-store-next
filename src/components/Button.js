// import styled from "styled-components";

// const Buttonn = styled.button`
//     width: 288px;
//     height: 69px;
//     flex-shrink: 0;
//     border-radius: 10px;
//     border: 1px solid black;
//     background: #000;
//     color: #FFF;
//     text-align: center;
//     font-family: Jost;
//     font-size: 16px;
//     font-weight: 600;
//     line-height: 225%;
//     letter-spacing: 0.96px;
//     text-transform: uppercase;
//     transition: all 0.5s;

//     &:hover{
//         cursor: pointer;
//         border-color: black;
//         background-color: #FFF;
//         color: black;
//     }
// `

const Button = (children) => {
    return (
        <button className="w-[288px] h-[69px] shrink-0 rounded-lg border-black bg-black text-white text-base font-semibold leading-[225%] tracking-[0.96px] uppercase duration-[0.5s] transition-all :hover-cursor-pointer :hover-border-black :hover-bg-black text-black">{children}</button>

    )
}

export default Button