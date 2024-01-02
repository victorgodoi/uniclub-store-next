import ProductsList from "src/components/ProductsList";

export default function Products() {
  return (
    <div>
      <ProductsList
        quantidade={null}
        titulo={"Products"}
        carregarMais={false}
      />
    </div>
  );
}
