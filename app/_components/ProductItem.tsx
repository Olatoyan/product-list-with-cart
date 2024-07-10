"use client";

import Image from "next/image";
import { productItem } from "../_lib/data";
import { useCart } from "../_context/CartContext";

function ProductItem({ item }: { item: productItem }) {
  const {
    name,
    price,
    category,
    image: { desktop, tablet, mobile },
  } = item;

  const {
    addToCart,
    cart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = useCart();

  const isItemInCart = cart.some((cartItem) => cartItem.product === item);

  console.log(isItemInCart, item);

  function handleAddToCart() {
    console.log("Add to cart: ", item);
    addToCart(item);
  }

  function handleRemoveFromCart() {
    console.log("Remove from cart: ", item);
    removeFromCart(item);
  }

  function handleIncreaseQuantity() {
    console.log("Increase quantity: ", item);
    increaseQuantity(item);
  }

  function handleDecreaseQuantity() {
    console.log("Decrease quantity: ", item);
    decreaseQuantity(item);
  }

  return (
    <div className="flex flex-col items-center">
      <Image
        src={desktop}
        alt={name}
        width={240}
        height={240}
        className="rounded-[0.8rem]"
      />

      {isItemInCart ? (
        <>
          <div className="-mt-[3rem] flex w-[16rem] items-center justify-between rounded-full bg-[#c73b0f] p-[1.2rem]">
            <button onClick={handleDecreaseQuantity}>
              <svg className="h-[2.4rem] w-[2.4rem] fill-white stroke-white hover:fill-black hover:stroke-black">
                <use xlinkHref="./icon-decrement-quantity.svg#minus"></use>
              </svg>
            </button>

            <span className="text-[1.4rem] font-semibold text-white">
              {cart.find((cartItem) => cartItem.product === item)?.quantity}
            </span>
            <button onClick={handleIncreaseQuantity}>
              <svg className="h-[2.4rem] w-[2.4rem] fill-white stroke-white hover:fill-black hover:stroke-black">
                <use xlinkHref="./icon-increment-quantity.svg#add"></use>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <button
          className="group -mt-[3rem] flex w-[16rem] items-center justify-center gap-[0.8rem] rounded-full border border-[#ad8a85] bg-white p-[1.2rem] transition-all duration-300 hover:border-[#c73b0f]"
          onClick={handleAddToCart}
        >
          <Image
            src="./icon-add-to-cart.svg"
            alt="Add to cart"
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
