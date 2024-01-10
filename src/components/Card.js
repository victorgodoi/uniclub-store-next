import Image from "next/image";

const Component = ({ text, preco, img }) => {
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
};

export default Component;
