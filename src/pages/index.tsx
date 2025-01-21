import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | samsdev</title>
      </Head>
      <main className="">
        <div className="bg-black text-white flex h-[90px] items-center justify-between">
          <Link href="/">
            <Image src="/Sd.png" width={90} height={90} alt="" />
          </Link>
          <span>SAMSDEV</span>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Sobre mim</Link>
            </li>
            <li>
              <Link href="/">Projetos</Link>
            </li>
            <li>
              <Link href="/servicos">Serviços</Link>
            </li>
            <li>
              <Link href="/contatos">Entre em contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <b className="text-[32px]">Oi 👋🏽 SOU O SAMUEL DOS SANTOS</b>
          <h1 className="text-[105px]">
            <span className="text-[#498EF3]">FRONTEND</span> <br />{" "}
            <span>DEVELOPER</span>
          </h1>
          <p className="text-base">
            Tenho 22 anos e sou desenvolvedor Frontend, atualmente atuando como
            freelancer. Especializo-me em criar sistemas que aprimoram a
            eficiência e produtividade dos meus clientes. Foco em oferecer
            soluções personalizadas e otimizadas, utilizando as tecnologias mais
            requisitadas do mercado. Meu objetivo é proporcionar uma experiência
            de uso superior que atenda às necessidades específicas de cada
            cliente.
          </p>
          <ul className="flex gap-[30]">
            <li className="bg-white w-[80] h-[80]">title</li>
            <li className="bg-white w-[80] h-[80]">title</li>
            <li className="bg-white w-[80] h-[80]">title</li>
            <li className="bg-white w-[80] h-[80]">title</li>
            <li className="bg-white w-[80] h-[80]">title</li>
            <li className="bg-white w-[80] h-[80]">title</li>
          </ul>
        </div>
        <div>
          <Image src="" alt="" />
          <ul className="flex">
            <li className="bg-[#498EF3] w-[80] h-[80]">Linkedin</li>
            <li className="bg-[#498EF3] w-[80] h-[80]">Github</li>
            <li className="bg-[#498EF3] w-[80] h-[80]">Curriculo</li>
          </ul>
          <button className="bg-[#498EF3] w-[315] h-[80]">Fale Comigo!</button>
        </div>
      </main>
    </>
  );
};

export default Home;
