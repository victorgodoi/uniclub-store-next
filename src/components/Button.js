import classNames from "classnames";
import Link from "next/link";

const Button = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={classNames(
        "flex items-center justify-center w-[288px] h-[69px] shrink-0 rounded-lg border-2 border-black bg-black text-white text-base font-semibold uppercase duration-500 transition-all hover:cursor-pointer hover:bg-white hover:text-black hover:border-black hover:border-2",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
