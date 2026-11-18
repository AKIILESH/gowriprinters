import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-clip">
      <Navbar />
      <main className="flex-1 w-full min-w-0">{children}</main>
      <Footer />
    </div>
  );
}
