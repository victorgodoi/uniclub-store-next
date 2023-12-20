import { createClient } from "@supabase/supabase-js";
import Content from "src/components/Content";
import { josefin } from "@/app/fonts";
import classNames from "classnames";
import Card from "src/components/Card";
import Button from "./Button";

const supabase = createClient(
  "https://mabkxpvmoabhozufruai.supabase.co",
  process.env.SUPABASE_KEY
);

const getData = async ({ quantidade }) => {
  const { data } = await supabase.from("uniclub").select().limit(quantidade);
  return data;
};

const Component = async ({ quantidade, titulo, carregarMais }) => {
  const produtos = await getData({ quantidade: quantidade });

  return (
    <Content>
      <div className="flex flex-col">
        <div className="flex items-center flex-col mb-[50px]">
          <p
            className={classNames(
              "text-lightBlack text-4xl font-light uppercase",
              josefin.className
            )}
          >
            {titulo}
          </p>
          <div className="bg-black w-[95px] h-[1px] mt-[30px]" />
        </div>
        <div className="grid grid-cols-4 gap-y-10 gap-x-[25px]">
          {produtos?.map((produto) => {
            return (
              <Card
                key={produto.id}
                text={produto.title}
                preco={produto.price}
                img={produto.image}
              />
            );
          })}
        </div>
        {carregarMais && (
          <div className="flex justify-center mt-[100px] mb-[200px]">
            <Button onClick={() => navigate("/products")}>
              View all products
            </Button>
          </div>
        )}
      </div>
    </Content>
  );
};

export default Component;
