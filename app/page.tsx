import Cart from "./_components/Cart";
import ConfirmationModal from "./_components/ConfirmationModal";
import ProductList from "./_components/ProductList";
import { data } from "./_lib/data";

async function page() {
  return (
    <main className="relative flex items-start justify-around">
      <ProductList data={data} />
      <Cart />
      <ConfirmationModal />
    </main>
  );
}

export default page;
