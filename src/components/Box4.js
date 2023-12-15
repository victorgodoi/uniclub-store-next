import { josefin } from "@/app/fonts";
import classNames from "classnames";

const Component = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[1710px] w-[95%] flex justify-center gap-[60px] mb-[70px]">
        <div className="bg-no-repeat bg-center bg-cover h-[200px] flex-1 bg-banner02">
          <p
            className={classNames(
              "text-white text-2xl font-bold tracking-[2.4px] uppercase mt-[155px] ml-[50px]",
              josefin.className
            )}
          >
            Printed t-shirts
          </p>
        </div>
        <div className="bg-no-repeat bg-center bg-cover h-[200px] flex-1 bg-banner03">
          <p
            className={classNames(
              "text-white text-2xl font-bold tracking-[2.4px] uppercase mt-[155px] ml-[50px]",
              josefin.className
            )}
          >
            t-shirts
          </p>
        </div>
        <div className="bg-no-repeat bg-center bg-cover h-[200px] flex-1 bg-banner04">
          <p
            className={classNames(
              "text-white text-2xl font-bold tracking-[2.4px] uppercase mt-[155px] ml-[50px]",
              josefin.className
            )}
          >
            speak your mind
          </p>
        </div>
      </div>
    </div>
  );
};

export default Component;
