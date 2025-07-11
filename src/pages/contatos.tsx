import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | samsdev</title>
      </Head>
      <section className="bg-red-500 mx-[175] mt-[40] h-[800]">
        <h1 className="text-black text-center font-medium text-5xl">
          Contatos
        </h1>
        <div className="bg-purple-400 grid grid-cols-2">
          <form
            className="flex flex-col gap-2 w-[478] h-[448]"
            action="https://www.notion.so/samsdevtech/dev-3f3aa5c888d14622a698a909d66e6f5a"
            method="POST"
          >
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome">Nome*</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="assunto">Assunto*</label>
              <input type="text" id="assunto" name="assunto" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem"></textarea>
            </div>
            <input type="submit" value="Enviar" />
          </form>
          <div className="bg-blue-400">
            <h2>Vamos criar um projeto juntos, contate-me</h2>
            <ul className="flex  gap-12">
              <li className="w-12 h-12">
                <Link href="">
                  <Image src="" alt=""></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image src="" alt=""></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image src="" alt=""></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image src="" alt=""></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image src="" alt=""></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image src="" alt=""></Image>
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
        <p>Obrigado por optar pela SAMSDEV</p>
      </section>
    </>
  );
};

export default Contatos;
