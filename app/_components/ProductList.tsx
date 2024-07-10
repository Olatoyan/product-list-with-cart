import { productItem } from "../_lib/data";
import ProductItem from "./ProductItem";

function ProductList({ data }: { data: productItem[] }) {
  return (
    <section className="flex flex-col gap-[3.2rem]">
      <h1 className="text-[4rem] font-bold leading-[120%] text-[#260f08]">
        Desserts
      </h1>

      <div className="mobile:grid-cols-1 grid grid-cols-3 gap-10">
        {data.map((item) => (
          <ProductItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
