import Link from "next/link";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});
const Header = () => {
  return (
    <header>
      <div className="bg-black text-white flex h-[90px] items-center justify-between">
        <div className="flex items-center ml-[165px] ">
          <Link href="/">
            <Image src="/Sd.png" width={90} height={90} alt="Logo da Samsdev" />
          </Link>
          <span className={` ${opensans.className} text-2xl`}>
            S A M S D E V{" "}
          </span>
        </div>

        <nav className="flex gap-4 mr-[175]">
          <Link className="font-semibold" href="/">
            Sobre mim
          </Link>
          <Link className="font-semibold" href="/projetos">
            Projetos
          </Link>
          <Link className="font-semibold" href="/servicos">
            Serviços
          </Link>
          <Link className="font-semibold" href="/contatos">
            Entre em contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
