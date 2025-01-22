import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | samsdev</title>
      </Head>
      <div>
        <h1>Contatos</h1>
        <form
          className="flex gap-2"
          action="https://www.notion.so/samsdevtech/dev-3f3aa5c888d14622a698a909d66e6f5a"
          method="post"
          target="blank"
        >
          <label htmlFor="nome">Nome*</label>
          <input type="text" id="nome" name="nome" required />
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="assunto">Assunto*</label>
          <input type="text" id="assunto" name="assunto" required />
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem"></textarea>
          <input type="submit" value="Enviar" />
        </form>
        <h2>Vamos criar um projeto juntos, contate-me</h2>
        <ul className="flex  gap-12 bg-slate-500">
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
    </>
  );
};

export default Contatos;
