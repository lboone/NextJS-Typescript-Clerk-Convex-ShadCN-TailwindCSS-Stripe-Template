"use client";

import { useMutation } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    storeUser({});
  });

  return (
    <>
      <h1>Hello World</h1>
      <SignOutButton />
    </>
  );
}
