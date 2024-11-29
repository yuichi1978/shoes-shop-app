import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { SIZES, QTY } from "../constant";

export function CartItem({ item: { product, qty, size }, onClickTrash }) {
  return (
    <div
      className="
    hover:bg-[#DAFFA2] bg-gray-100 dark:bg-transparent dark:hover:bg-night-50 
      p-2 cursor-pointer space-y-2
      "
    >
      <div className="flex space-x-2">
        {/* Image */}
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          {/* Title & Description */}
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-4 md:space-x-3 pl-32">
          <div>
            <div className="font-bold dark:text-white">SIZES</div>
            <Select
              value={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              value={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>
        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
