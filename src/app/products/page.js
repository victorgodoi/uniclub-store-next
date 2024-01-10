import ProductsList from "src/components/ProductsList";
import { josefin } from "@/app/fonts";
import classNames from "classnames";
import { Suspense } from "react";
import LoadingCard from "src/components/LoadingCard";

export default function Products() {
  return (
    <div>
      <div className="flex items-center flex-col mb-[50px]">
        <p
          className={classNames(
            "text-lightBlack text-4xl font-light uppercase",
            josefin.className
          )}
        >
          Products
        </p>
        <div className="bg-black w-[95px] h-[1px] mt-[30px]" />
      </div>
      <Suspense fallback={<LoadingCard />}>
        <ProductsList quantidade={null} carregarMais={false} />
      </Suspense>
    </div>
  );
}
