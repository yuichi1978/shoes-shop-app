import { CartItem } from "./CartItem";

export function Cart({ cartItems, onClickTrash }) {
  return (
    <div>
      <h2 className="text-4xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </div>
  );
}
