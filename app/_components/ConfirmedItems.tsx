"use client";

import Image from "next/image";
import { useCart } from "../_context/CartContext";
import { productItem } from "../_lib/data";

function ConfirmedItems({
  item,
  quantity,
}: {
  item: productItem;
  quantity: number;
}) {
  const { cart, removeFromCart } = useCart();

  const {
    name,
    price,
    image: { thumbnail },
  } = item;

  return (
    <li className="flex items-center justify-between border-b border-[#f5eeec] pb-[1.6rem]">
      <div className="flex gap-[1.6rem]">
        <Image src={thumbnail} alt={name} width={48} height={48} />
        <div className="flex flex-col gap-3">
          <h3 className="text-[1.4rem] font-semibold text-[#260f08]">{name}</h3>
          <p className="flex gap-[0.8rem]">
            <span className="w-[2.1rem] text-[1.4rem] font-semibold text-[#c73b0f]">
              {quantity}x
            </span>
            <span className="w-[5rem] text-[1.4rem] text-[#87635a]">
              @${price.toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      <span className="w-[3.8rem] text-[1.6rem] font-semibold text-[#260f08]">
        ${(price * quantity).toFixed(2)}
      </span>
    </li>
  );
}

export default ConfirmedItems;
