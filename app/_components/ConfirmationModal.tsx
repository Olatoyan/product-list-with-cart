"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContext";
import CartList from "./CartList";
import ConfirmedItems from "./ConfirmedItems";

function ConfirmationModal() {
  const { cart, isOrderConfirmed, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0,
  );

  return (
    <div
      className={`fixed inset-0 flex h-full w-full items-center justify-center transition-all duration-300 mobile:items-end ${isOrderConfirmed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="z-10 flex max-h-[60rem] w-full max-w-[60rem] flex-col gap-[3.2rem] overflow-auto bg-white p-16 mobile:max-h-[70rem]">
        <Image
          src="./icon-order-confirmed.svg"
          alt="Order confirmation"
          width={48}
          height={48}
        />

        <div>
          <h2 className="text-[4rem] font-bold leading-[4.8rem] text-[#260f08]">
            Order Confirmed
          </h2>
          <p className="text-[1.6rem] text-[#87635a]">
            We hope you enjoy your food!
          </p>
        </div>

        <div className="flex flex-col gap-10 rounded-[0.8rem] bg-[#fcf8f6] p-10">
          <ul className="flex flex-col gap-10">
            {cart.map((item) => (
              <ConfirmedItems
                key={item.product.name}
                item={item.product}
                quantity={item.quantity}
              />
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <h3 className="text-[1.4rem] text-[#260f08]">Order Total</h3>
            <p className="text-[2.4rem] font-bold text-[#260f08]">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>

        <button
          className="flex items-center justify-center rounded-full bg-[#c73b0f] px-10 py-[1.6rem] text-[1.6rem] font-semibold text-white"
          onClick={clearCart}
        >
          Start New Order
        </button>
      </div>

      <div className="fixed inset-0 bg-black/50"></div>
    </div>
  );
}

export default ConfirmationModal;
