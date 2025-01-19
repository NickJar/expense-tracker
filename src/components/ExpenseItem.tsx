import { Card } from "./ui/card";
import { currencyFormatter } from "@/lib/utils";

type props = {
  name: string;
  price: number;
  color: string;
};

function ExpenseItem({ name, price, color }: props) {
  return (
    <Card className="flex items-center justify-between w-[350px] sm:w-[925px] p-6 text-2xl font-semibold hover:scale-105 hover:ease-linear">
      <div className="flex flex-row gap-4 items-center">
        <div
          className="w-10 h-10 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        <div>{name}</div>
      </div>

      <div>{currencyFormatter(price)}</div>
    </Card>
  );
}
export default ExpenseItem;
