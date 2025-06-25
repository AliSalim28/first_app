import Navbar from "@/components/navigation/navbar/page";
import { ReactNode } from "react";


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;