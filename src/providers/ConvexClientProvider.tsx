"use client";
import { ReactNode } from "react";
import { ClerkProvider, SignIn, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient, Unauthenticated } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import Loading from "@/components/auth/loading";


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <AuthLoading>
          <Loading />
        </AuthLoading>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>{children}</Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}