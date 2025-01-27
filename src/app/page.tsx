import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { currencyFormatter } from "@/lib/utils";
// import ExpenseItem from "@/components/ExpenseItem";
// import Modal from "@/components/Modal";
// import { useState } from "react";
import React from "react";
import { auth0 } from "@/lib/auth0";
import { Button } from "@/components/ui/button";
import MainPage from "@/components/MainPage";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <main className="flex justify-center items-center w-full h-screen bg-black p-6 gap-4">
        <Card className="flex flex-col items-center justify-center p-6 w-[1000px] h-[600px]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Expense Tracker
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center p-4 gap-2">
            <div>
              <a href="/auth/login?screen_hint=signup">
                <Button>Sign up</Button>
              </a>
            </div>

            <div>
              <a href="/auth/login">
                <Button variant={"outline"}>Log in</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main>
      <MainPage />
    </main>
  );
}

// export default function Home() {
