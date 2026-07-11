import { ConvexProvider, ConvexReactClient } from "convex/react";
import type { PropsWithChildren } from "react";

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error(
    "Falta configurar EXPO_PUBLIC_CONVEX_URL",
  );
}

const convexClient = new ConvexReactClient(convexUrl);

export function ConvexClientProvider({
  children,
}: PropsWithChildren) {
  return (
    <ConvexProvider client={convexClient}>
      {children}
    </ConvexProvider>
  );
}