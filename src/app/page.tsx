"use client";

import { useMutation } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    storeUser({});
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Button variant="secondary" onClick={()=> {toast.success("It was successful")}}>Click Me</Button>
      <Button variant="outline"><SignOutButton /></Button>
    </div>
  );
}
