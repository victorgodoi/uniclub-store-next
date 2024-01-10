import Box2 from "src/components/Box2";
import Box5 from "src/components/Box5";
import Banner from "src/components/Banner";
import Box4 from "src/components/Box4";
import ProductsList from "src/components/ProductsList";
import { josefin } from "@/app/fonts";
import classNames from "classnames";
import LoadingCard from "src/components/LoadingCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Box2 />
      <div className="flex items-center flex-col mb-[50px]">
        <p
          className={classNames(
            "text-lightBlack text-4xl font-light uppercase",
            josefin.className
          )}
        >
          New Arrivals
        </p>
        <div className="bg-black w-[95px] h-[1px] mt-[30px]" />
      </div>
      <Suspense fallback={<LoadingCard />}>
        <ProductsList quantidade={8} carregarMais={true} />
      </Suspense>
      <Box4 />
      <Box5 />
    </div>
  );
}
