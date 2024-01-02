"use client";
import classNames from "classnames";
import { josefin } from "@/app/fonts";
import { usePathname } from "next/navigation";

const Component = () => {
  const pathname = usePathname();
  const homepage = pathname === "/";

  return (
    <footer className={homepage === false && "mt-[150px]"}>
      <div className="flex flex-col bg-black items-center">
        <div className="w-full max-w-[80%]">
          <div className="flex justify-between mb-[85px] mt-[80px]">
            <div>
              <img
                src="images/logo.png"
                width={267}
                height={60}
                alt="logo"
              ></img>
              <ul className="flex gap-7 items-center">
                <li className="pl-[7px]">
                  <img
                    src="images/Facebook.svg"
                    width={7}
                    height={20}
                    alt="icone do Facebook"
                  />
                </li>
                <li>
                  <img
                    src="images/Twitter.svg"
                    width={17}
                    height={20}
                    alt="icone do Twitter"
                  />
                </li>
                <li>
                  <img
                    src="images/Pinterest.svg"
                    width={16}
                    height={20}
                    alt="icone do Pinterest"
                  />
                </li>
                <li>
                  <img
                    src="images/Instagram.svg"
                    width={15}
                    height={15}
                    alt="icone do Instagram"
                  />
                </li>
                <li>
                  <img
                    src="images/Youtube.svg"
                    width={18}
                    height={20}
                    alt="icone do Youtube"
                  />
                </li>
              </ul>
            </div>
            <div className="grid gap-[130px] grid-cols-3">
              <ul>
                <li
                  className={classNames(
                    "text-white text-lg font-bold uppercase",
                    josefin.className
                  )}
                >
                  Quick links
                </li>
                <li className="text-grey3 leading-loose capitalize">Home</li>
                <li className="text-grey3 leading-loose capitalize">
                  About us
                </li>
                <li className="text-grey3 leading-loose capitalize">Offers</li>
                <li className="text-grey3 leading-loose capitalize">
                  Services
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  Contact us
                </li>
              </ul>
              <ul>
                <li
                  className={classNames(
                    "text-white text-lg font-bold uppercase",
                    josefin.className
                  )}
                >
                  About
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  How it work
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  our packages
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  promotions
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  refer a friend
                </li>
              </ul>
              <ul>
                <li
                  className={classNames(
                    "text-white text-lg font-bold uppercase",
                    josefin.className
                  )}
                >
                  Help Centre
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  Payments
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  Shipping
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  Product returns
                </li>
                <li className="text-grey3 leading-loose capitalize">FAQs</li>
                <li className="text-grey3 leading-loose capitalize">
                  Checkout
                </li>
                <li className="text-grey3 leading-loose capitalize">
                  other Issues
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-black items-center border-t-[1px] border-colorFooter pt-10 pb-[215px]">
        <div className="w-full max-w-[80%]">
          <div className="flex justify-between items-center">
            <p className="text-grey3 leading-loose">
              © 2022 UNICLUB. All rights reserved.
            </p>
            <p className="text-grey3 leading-loose">
              Design by <span className="font-bold">TemplatesJungle</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Component;
