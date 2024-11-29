import { Card } from "../components/Card";

export function NewArrivalsSection({ items, onClickCard }) {
  return (
    <div className="mt-20 dark:text-white">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 grid justify-between grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]  gap-x-6 gap-y-24">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
}
