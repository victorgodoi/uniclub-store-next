import classNames from "classnames"


const Button = ({ children, className }) => {
    return (
        <button className={classNames("w-[288px] h-[69px] shrink-0 rounded-lg border-black bg-black text-white text-base font-semibold uppercase duration-500 transition-all hover:cursor-pointer hover:bg-white hover:text-black", className)}>{children}</button>
    )
}

export default Button