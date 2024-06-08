import "./root.css";
import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export const Route = createRootRoute({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [queryClient] = useState(
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 3,
          },
        },
      }),
    );
    return (
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <QueryClientProvider client={queryClient}>
          <div className="bg-background min-h-screen p-4 font-sans antialiased">
            <div className="flex justify-between">
              <div className="text-foreground flex gap-2 p-2">
                Guess the next line
              </div>
              <ModeToggle />
            </div>
            <div className="container mx-auto">
              <Outlet />
            </div>
          </div>
        </QueryClientProvider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools client={queryClient} />
      </ThemeProvider>
    );
  },
});
