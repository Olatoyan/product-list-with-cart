import Cart from "./_components/Cart";
import ConfirmationModal from "./_components/ConfirmationModal";
import ProductList from "./_components/ProductList";
import { data } from "./_lib/data";

async function page() {
  return (
    <main className="laptop:flex-col laptop:items-center relative flex items-start justify-around gap-12">
      <ProductList data={data} />
      <Cart />
      <ConfirmationModal />
    </main>
  );
}

export default page;
