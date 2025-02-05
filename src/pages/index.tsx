import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Ubuntu, Roboto, Nunito } from "next/font/google";

const ubunto = Ubuntu({
  weight: "700",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | samsdev</title>
      </Head>
      <main className="mx-[175] mt-[80] flex justify-center grid-cols-2">
        <div>
          <b className={` ${roboto.className} text-4xl `}>
            Oi 👋🏽 SOU O SAMUEL DOS SANTOS
          </b>
          <h1 className="text-9xl">
            <span className={` ${ubunto.className} text-[#498EF3] `}>
              FRONTEND
            </span>{" "}
            <br /> <span className={` ${ubunto.className} `}>DEVELOPER</span>
          </h1>
          <p className={` ${nunito.className} text-base text-slate-800 pt-2`}>
            Tenho 22 anos e sou desenvolvedor Frontend, atualmente atuando como
            freelancer. Especializo-me em criar sistemas que aprimoram a
            eficiência e produtividade dos meus clientes. Foco em oferecer
            soluções personalizadas e otimizadas, utilizando as tecnologias mais
            requisitadas do mercado. Meu objetivo é proporcionar uma experiência
            de uso superior que atenda às necessidades específicas de cada
            cliente.
          </p>
          <ul className="flex justufy-center gap-[30] mt-[40]">
            <li className="flex justify-center bg-white w-[80] h-[80] rounded-[25] shadow-md">
              <Image src="/html.svg" alt="" width={60} height={60} />{" "}
            </li>
            <li className="flex justify-center bg-white w-[80] h-[80] rounded-[25] shadow-md">
              <Image src="/css.svg" alt="" width={60} height={60} />{" "}
            </li>
            <li className="flex justify-center bg-white w-[80] h-[80] rounded-[25] shadow-md">
              <Image src="/js.svg" alt="" width={60} height={60} />{" "}
            </li>
            <li className="flex justify-center bg-white w-[80] h-[80] rounded-[25] shadow-md">
              <Image src="/react.svg" alt="" width={60} height={60} />{" "}
            </li>
            <li className="flex justify-center bg-white w-[80] h-[80] rounded-[25] shadow-md">
              <Image src="/nextjs.svg" alt="" width={60} height={60} />{" "}
            </li>
            <li className="flex justify-center bg-white w-[80] h-[80] rounded-[25] shadow-md">
              <Image src="/twcss.svg" alt="" width={60} height={60} />{" "}
            </li>
          </ul>
        </div>
        <div className="ml-[120] ">
          <Image
            className="img-float"
            src="programming_light.svg"
            width={1332}
            height={256}
            alt=""
          />

          <ul className="flex justify-center gap-16 mb-6 mt-[22]">
            <li className="bg-[#498EF3] w-[30] h-[30] rounded-full">
              <Link href="/" target="blank">
                <Image src="/inl.png" alt="" width={30} height={30} />
              </Link>
            </li>
            <li className="bg-[#ffffff] w-[30] h-[30] rounded-full">
              <Link href="" target="blank">
                <Image src="/ghl.png" alt="" width={30} height={30} />
              </Link>
            </li>
            <li className="bg-[#498EF3] w-[30] h-[30] rounded-full">
              <Link href="" target="blank">
                <Image src="/cvl.png" alt="" width={30} height={30} />
              </Link>
            </li>
          </ul>
          <button
            className={` ${ubunto.className} bg-[#498EF3] ml-12 w-[315] h-[80] rounded-[20] shadow-md text-white text-5xl `}
          >
            Fale Comigo!
          </button>
        </div>
      </main>
      <div className={`${nunito.className} flex justify-center items-center gap-2 mt-20 text-[#0F0E14] text-opacity-70 text-base`}>
        Acesse meus projetos
        <Image className="opacity-70 rotate-90 arrow-float" src="/arrowdd.png" alt="" width={12} height={12} />
      </div>
    </>
  );
};

export default Home;
