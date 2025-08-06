import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Ubuntu, Roboto } from "next/font/google";

const ubunto = Ubuntu({
  weight: "700",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "700",
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
          <b className={` ${roboto.className} text-3xl pl-2 flex items-center`}>
            Oi <Image src="/maobg.gif" alt="icone mão acenando" width={80} height={60} unoptimized/> SOU O SAMUEL DOS SANTOS
          </b>
          <h1 className="text-[80px]">
            <span className={` ${ubunto.className} text-[#498EF3] `}>
              FRONTEND
            </span>{" "}
            <span className={` ${ubunto.className} `}>DEVELOPER</span>
          </h1>
          <b className="text-4xl text-gray-700">
            Transformo ideias em interfaces modernas, acessíveis e de alto
            desempenho.
          </b>
          <p className="pt-4 text-base text-slate-800 pl-2">
            &nbsp;Atuo como Desenvolvedor Frontend desde maio de 2023, com
            experiência prática na criação de interfaces modernas, responsivas,
            acessíveis e performáticas. Trabalho com tecnologias como HTML, CSS,
            JavaScript, APIs REST, React, Redux, TypeScript, Next.js e Tailwind
            CSS. Atualmente, estou aprofundando conhecimentos em testes
            unitários e automatizados, TDD, CI/CD, princípios SOLID,
            escalabilidade e manutenção de sistemas. Também venho estudando
            Node.js e MongoDB para complementar meu repertório e expandir minha
            visão sobre o desenvolvimento fullstack.
            <br />
            &nbsp;Gosto de aplicar conceitos de UX/UI, SEO, boas práticas de
            desenvolvimento, Clean Code, Clean Architecture, Atomic Design e
            padrões de projeto em todos os projetos que desenvolvo — sejam
            autorais ou colaborativos. Sou proativo, focado em aprendizado
            contínuo e motivado a contribuir com soluções eficientes, escaláveis
            e com impacto real.
          </p>
          <ul className="flex justify-center gap-[30px] mt-[40px]">
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/html.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">
                HTML 5
              </h2>
            </div>
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/css.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">CSS 3</h2>
            </div>
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/js.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">
                JavaScript
              </h2>
            </div>
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/react.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">
                React JS
              </h2>
            </div>
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/nextjs.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">
                Next Js
              </h2>
            </div>
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/twcss.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">
                Tailwind CSS
              </h2>
            </div>
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/node.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">
                Node JS
              </h2>
            </div>
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/mongo.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">
                Mongo DB
              </h2>
            </div>
            <div>
              <li className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
                <Image src="/mysql.svg" alt="" width={60} height={60} />
              </li>
              <h2 className="text-center text-sm text-gray-400 mt-2 ">
                MySQL
              </h2>
            </div>
            
          </ul>
        </div>
        <div className="ml-[120]">
          <Image
            className="img-float pt-20"
            src="programming_light.svg"
            width={1332}
            height={256}
            alt=""
          />
          <div className="flex justify-center">
            <button
              className={` ${ubunto.className} bg-[#498EF3] w-[315] h-[80] rounded-[20] mt-10 shadow-md text-white text-5xl hover:bg-white hover:text-[#498EF3] hover:scale-y-110`}
            >
              Fale Comigo!
            </button>
          </div>
          <ul className="flex justify-center gap-20 mt-[22]">
            <li className="w-[30] h-[30] rounded-full">
              <Link href="/" target="blank">
                <Image src="/inl.png" alt="" width={30} height={30} />
              </Link>
            </li>
            <li className="bg-[#ffffff] w-[30] h-[30] rounded-full">
              <Link href="" target="blank">
                <Image src="/ghl.png" alt="" width={30} height={30} />
              </Link>
            </li>
            <li className="w-[30] h-[30] rounded-full">
              <Link href="" target="blank">
                <Image src="/cvl.png" alt="" width={30} height={30} />
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <div className="flex justify-center items-center gap-2 mt-20 text-[#0F0E14] text-opacity-65 text-base">
        <Link href="/">Acesse meus projetos</Link>
        <Image
          className="opacity-70 rotate-90 arrow-float"
          src="/arrowdd.png"
          alt=""
          width={12}
          height={12}
        />
      </div>
    </>
  );
};

export default Home;
