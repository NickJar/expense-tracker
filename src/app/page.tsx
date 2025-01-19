import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/utils";
import ExpenseItem from "@/components/ExpenseItem";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-4 container px-6 mx-auto">
      <div className="flex flex-row gap-6 justify-center">
        <div className="flex flex-col gap-6">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>My Balance</CardTitle>
              <CardDescription>Lorem Ipsum Delor</CardDescription>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              <div className="text-center">{currencyFormatter(100000)}</div>
              <div className="flex flex-col gap-4 p-4">
                <Button>+ Income</Button>
                <Button variant={"outline"}>+ Expenses</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Lorem Ipsum</CardTitle>
              <CardDescription>Lorem Ipsum Delor</CardDescription>
            </CardHeader>
            <CardContent className="text-2xl font-bold"></CardContent>
          </Card>
        </div>

        <Card className="w-[600px] h-[560px]"></Card>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <ExpenseItem name="Food" price={100} color="#4c5564" />
        <ExpenseItem name="Anime" price={7500} color="#8477cf" />
      </div>
    </main>
  );
}
