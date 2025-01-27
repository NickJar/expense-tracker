"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { currencyFormatter } from "@/lib/utils";
import ExpenseItem from "./ExpenseItem";
import Modal from "./Modal";

function MainPage() {
  const [modalOpen, setModalState] = useState(false);

  const handleClick = () => {
    if (modalOpen === true) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  };

  return (
    <main className="relative flex flex-col justify-center gap-4 container px-6 mx-auto">
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
                <div className="mx-auto" onClick={() => handleClick()}>
                  <Button>+ Income</Button>
                </div>
                <div className="mx-auto" onClick={() => handleClick()}>
                  <Button variant={"outline"}>+ Expenses</Button>
                </div>
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
        <div onClick={() => handleClick()}>
          <ExpenseItem name="Food" price={100} color="#4c5564" />
        </div>

        <div onClick={() => handleClick()}>
          <ExpenseItem name="Valorant" price={1000} color="#999999" />
        </div>
      </div>
      <Modal isOpen={modalOpen} closeModal={() => handleClick()} />
    </main>
  );
}

export default MainPage;
