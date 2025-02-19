import { ReactNode } from "react";
import Header from "./Header";
import { Nunito } from "next/font/google";

interface LayoutProps {
    children: ReactNode;
}
const nunito = Nunito (
  {
    subsets: ['latin'],
    weight: '400',
  }
);
export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={nunito.className}>
    <Header/>
    {children}
    </div>
    
  );
};
