// import styled from 'styled-components'
// import iconCarrinho from '../images/icon-carrinho.svg'
// import iconFavoritos from '../images/icon-favoritos.svg'
// import iconPerfil from '../images/icon-perfil.svg'
// import { NavLink } from "react-router-dom"
// import { useMatch } from 'react-router-dom';
import { josefin } from "@/app/fonts"
import classNames from "classnames"
import Link from "next/link"





// const AccountMenu = styled.div`
//     display: flex;
//     gap: 55px;

//     > div {
//         position: relative;
//     }
// `

// const Circle = styled.div`
//     background-color: black;
//     width: 17px;
//     height: 17px;
//     border-radius: 10px;
//     color: white;
//     font-size: 9px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: -10px;
//     left: 10px;
// `

// const Link = styled(NavLink)`
//     text-decoration: none;
//     color: #000;
//     font-family: Jost;
//     font-size: 14px;
//     font-weight: 700;
//     text-transform: uppercase;
//     &:hover {
//         text-decoration: underline;
//         cursor: pointer;
//     }
//     &.active {
//         border-radius: 15px;
//         border: 2px solid #282828;
//         padding: 3px 10px;
//     }
// `

const Component = () => {

    //const isMainRoute = useMatch("/");

    return (
        <header className='h-[130px] w-full flex items-center justify-center absolute t-0 l-0' >
            <div className='max-w-[1480px] w-full px-3 flex justify-between'>
                <div className='flex items-center'>
                    <p className={classNames('text-black text-3xl font-bold tracking-[-1px] uppercase mr-[70px]', josefin.className)}>uniclub</p>
                    <nav>
                        <ul className='flex gap-11'>
                            <Link className='no-underline text-black text-sm font-bold uppercase hover:underline hover:cursor-pointer' src='/'>home</Link>
                            <Link className='no-underline text-black text-sm font-bold uppercase hover:underline hover:cursor-pointer' src='/'>home</Link>
                            <Link className='no-underline text-black text-sm font-bold uppercase hover:underline hover:cursor-pointer' src='/'>home</Link>
                            <Link className='no-underline text-black text-sm font-bold uppercase hover:underline hover:cursor-pointer' src='/'>home</Link>
                            <Link className='no-underline text-black text-sm font-bold uppercase hover:underline hover:cursor-pointer' src='/'>home</Link>
                            <Link className='no-underline text-black text-sm font-bold uppercase hover:underline hover:cursor-pointer' src='/'>home</Link>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* <Content>
                <div>
                    <Logo>uniclub</Logo>
                    <nav>
                        <Menu>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/products'>shop</Link></li>
                            <li><Link to='/hoodies'>Hoodies</Link></li>
                            <li><Link to='/t-shirts'>T-shirts</Link></li>
                            <li><Link to='/accessories'>accessories</Link></li>
                            <li><Link to='/jackets'>jackets</Link></li>
                        </Menu>
                    </nav>
                </div>
                <AccountMenu>
                    <img src={iconPerfil} />
                    <div>
                        <img src={iconFavoritos} />
                        <Circle>12</Circle>
                    </div>
                    <div>
                        <img src={iconCarrinho} />
                        <Circle>3</Circle>
                    </div>
                </AccountMenu>
            </Content> */}
        </header>
    )
}


export default Component