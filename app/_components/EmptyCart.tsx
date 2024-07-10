import image from "@/public/illustration-empty-cart.svg";
import Image from "next/image";

function EmptyCart() {
  return (
    <div className="gao-[1.6rem] flex flex-col items-center">
      <Image src={image} alt="Empty cart" />

      <p className="text-center text-[1.4rem] font-semibold text-[#87635a]">
        Your added items will appear here
      </p>
    </div>
  );
}

export default EmptyCart;
