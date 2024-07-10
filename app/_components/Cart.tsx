"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContext";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { cart, placeOrder } = useCart();

  const allItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  const total = cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0,
  );

  return (
    <aside className="laptop:max-w-none flex w-full max-w-[39rem] flex-col gap-[2.4rem] rounded-[1.2rem] bg-white p-[2.4rem]">
      <h2 className="text-[2.4rem] font-bold text-[#c73b0f]">
        Your Cart ({allItemsInCart})
      </h2>

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ul className="flex flex-col gap-[1.6rem]">
            {cart.map((item) => (
              <CartList
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

          <div className="flex items-center justify-center gap-[0.8rem] rounded-[0.8rem] bg-[#fcf8f6] p-[1.6rem]">
            <Image
              src="./icon-carbon-neutral.svg"
              alt="Carbon Neutral"
              height={24}
              width={24}
            />
            <p className="text-[1.4rem] text-[#260f08]">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>

          <button
            className="flex items-center justify-center rounded-full bg-[#c73b0f] px-10 py-[1.6rem] text-[1.6rem] font-semibold text-white transition-all duration-300 hover:bg-[#3c1204]"
            onClick={placeOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </aside>
  );
}

export default Cart;
