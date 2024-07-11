import { productItem } from "../_lib/data";
import ProductItem from "./ProductItem";

function ProductList({ data }: { data: productItem[] }) {
  return (
    <section className="flex w-full flex-col gap-[3.2rem] mobile:w-full">
      <h1 className="text-[4rem] font-bold leading-[120%] text-[#260f08]">
        Desserts
      </h1>

      <div className="grid grid-cols-3 gap-10 mobile:grid-cols-1">
        {data.map((item) => (
          <ProductItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
