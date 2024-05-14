"use client";

import { useAction, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect } from "react";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function Home() {
  const storeUser = useMutation(api.users.store);

  const buyNow = useAction(api.stripe.pay);

  const router = useRouter();


  useEffect(() => {
    storeUser({});
  });

  const handleBuyNow = async () => {
    const url = await buyNow({});
    if(!url) return;

    router.push(url);
  } 

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Button variant="secondary" onClick={()=> {toast.success("It was successful")}}>Click Me</Button>
      <Button variant="outline"><SignOutButton /></Button>
      <Button variant="destructive" onClick={handleBuyNow}>Buy Now!</Button>
    </div>
  );
}
