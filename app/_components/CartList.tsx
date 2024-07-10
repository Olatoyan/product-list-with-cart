"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContext";
import { productItem } from "../_lib/data";

function CartList({ item, quantity }: { item: productItem; quantity: number }) {
  const { cart, removeFromCart } = useCart();

  const {
    name,
    price,
    image: { thumbnail },
  } = item;

  return (
    <li className="flex items-center justify-between border-b border-[#f5eeec] pb-[1.6rem]">
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.4rem] font-semibold text-[#260f08]">{name}</h3>
        <p className="flex gap-[0.8rem]">
          <span className="w-[2.1rem] text-[1.4rem] font-semibold text-[#c73b0f]">
            {quantity}x
          </span>
          <span className="w-[5rem] text-[1.4rem] text-[#87635a]">
            @${price.toFixed(2)}
          </span>
          <span className="w-[3.8rem] text-[1.4rem] font-semibold text-[#87635a]">
            ${(price * quantity).toFixed(2)}
          </span>
        </p>
      </div>

      <button>
        <Image
          src="./icon-remove-item.svg"
          alt="Remove from cart"
          width={24}
          height={24}
        />
      </button>
    </li>
  );
}

export default CartList;
