import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
export const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <header>
      <div className="bg-black text-white flex h-[90px] items-center justify-between">
        <Link href="/">
          <Image src="/Sd.png" width={90} height={90} alt="Logo da Samsdev" />
        </Link>
        <span>SAMSDEV</span>
        <nav className="flex gap-4">
            <Link href="/">Sobre mim</Link>
            <Link href="/">Projetos</Link>
            <Link href="/servicos">Serviços</Link>  
            <Link href="/contatos">Entre em contato</Link>
        </nav>
      </div>
    </header>
    {children}
    </>
    
  );
};
