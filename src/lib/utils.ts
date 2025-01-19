import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currencyFormatter = (amount: number) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });
  return formatter.format(amount);
};
