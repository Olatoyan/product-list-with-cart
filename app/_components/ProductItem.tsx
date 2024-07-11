"use client";

import Image from "next/image";
import { productItem } from "../_lib/data";
import { useCart } from "../_context/CartContext";
import useMediaQuery from "../_hooks/useMediaQuery";

function ProductItem({ item }: { item: productItem }) {
  const {
    name,
    price,
    category,
    image: { desktop, tablet, mobile },
  } = item;

  const isDesktop = useMediaQuery(
    "(min-width: 1300px) and (max-width: 2400px)",
  );
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1299px)");

  const { addToCart, cart, decreaseQuantity, increaseQuantity } = useCart();

  const isItemInCart = cart.some((cartItem) => cartItem.product === item);

  function handleAddToCart() {
    addToCart(item);
  }

  function handleIncreaseQuantity() {
    increaseQuantity(item);
  }

  function handleDecreaseQuantity() {
    decreaseQuantity(item);
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative rounded-[0.8rem] border-[2px] ${isDesktop ? "h-[24rem] w-full" : isTablet ? "h-[21rem] w-full" : "h-[21rem] w-full"} ${isItemInCart ? "border-[#c73b0f]" : "border-transparent"}`}
      >
        <Image
          src={isDesktop ? desktop : isTablet ? tablet : mobile}
          alt={name}
          fill
          priority
          className="rounded-[0.8rem] object-cover"
        />
      </div>
      {isItemInCart ? (
        <>
          <div className="z-20 -mt-[3rem] flex w-[16rem] items-center justify-between rounded-full bg-[#c73b0f] p-[1.2rem]">
            <button onClick={handleDecreaseQuantity}>
              <svg className="h-[2.4rem] w-[2.4rem] fill-white hover:stroke-white">
                <use xlinkHref="./icon-decrement-quantity.svg#minus"></use>
              </svg>
            </button>

            <span className="text-[1.4rem] font-semibold text-white">
              {cart.find((cartItem) => cartItem.product === item)?.quantity}
            </span>
            <button onClick={handleIncreaseQuantity}>
              <svg className="h-[2.4rem] w-[2.4rem] fill-white hover:stroke-white">
                <use xlinkHref="./icon-increment-quantity.svg#add"></use>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <button
          className="group z-20 -mt-[3rem] flex w-[16rem] items-center justify-center gap-[0.8rem] rounded-full border border-[#ad8a85] bg-white p-[1.2rem] transition-all duration-300 hover:border-[#c73b0f]"
          onClick={handleAddToCart}
        >
          <Image
            src="./icon-add-to-cart.svg"
            alt={`Add ${item.name} to cart`}
            width={24}
            height={24}
          />
          <span className="text-[1.4rem] font-semibold text-[#260f08] transition-all duration-300 group-hover:text-[#c73b0f]">
            Add to cart
          </span>
        </button>
      )}
      <div className="flex w-full flex-col gap-[0.4rem] pt-[1.6rem]">
        <p className="text-[1.6rem] font-semibold text-[#260f08]">{category}</p>
        <h2 className="text-[1.4rem] text-[#87635a]">{name}</h2>
        <span className="text-[1.6rem] font-semibold text-[#c73b0f]">
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default ProductItem;
