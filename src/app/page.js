import Box2 from "src/components/Box2";
import Box5 from "src/components/Box5";
import Banner from "src/components/Banner";
import Box4 from "src/components/Box4";
import ProductsList from "src/components/ProductsList";

export default function Home() {
  return (
    <div>
      <Banner />
      <Box2 />
      <ProductsList
        quantidade={8}
        titulo={"new arrivals"}
        carregarMais={true}
      />
      <Box4 />
      <Box5 />
    </div>
  );
}
