import { createClient } from "@supabase/supabase-js";
import Content from "src/components/Content";
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

const Component = async ({ quantidade, carregarMais }) => {
  const produtos = await getData({ quantidade: quantidade });

  return (
    <Content>
      <div className="flex flex-col">
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
          <div className="flex justify-center mt-[100px]">
            <Button href="/products">View all products</Button>
          </div>
        )}
      </div>
    </Content>
  );
};

export default Component;
