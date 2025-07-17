import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | samsdev</title>
      </Head>
      <section className="mx-[175px] mt-[40px] pb-[80px] px-12 h-[800px] bg-white rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <h1 className="text-black text-center font-medium text-5xl pt-12 pb-[75px]">
          CONTATOS
        </h1>
        <div className="grid grid-cols-2 justify-items-center">
          <form
            className="flex flex-col px-12 py-9 gap-4 w-[478px] h-[390px] bg-[] text-white border-2 border-[#498EF3] rounded-xl"
            action="https://www.notion.so/samsdevtech/dev-3f3aa5c888d14622a698a909d66e6f5a"
            method="POST"
          >
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col gap-2">
                <label
                  className="text-2xl font-medium text-[#498EF3]"
                  htmlFor="nome"
                >
                  Nome*
                </label>
                <input
                  placeholder="seu nome"
                  className="w-[182px] rounded bg-transparent border-b border-[#498EF3]"
                  type="text"
                  id="nome"
                  name="nome"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-2xl font-medium text-[#498EF3]"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  placeholder="username@gmail.com"
                  className="w-[182px] rounded bg-transparent border-b border-[#498EF3]"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-2xl font-medium text-[#498EF3]"
                htmlFor="assunto"
              >
                assunto*
              </label>
              <input
                placeholder="seu assunto..."
                className="w-[400px] text-black self-center rounded bg-transparent border-b border-[#498EF3]"
                type="text"
                id="assunto"
                name="assunto"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-2xl font-medium text-[#498EF3]"
                htmlFor="mensagem"
              >
                mensagem
              </label>
              <textarea
                placeholder="Digite sua mensagem..."
                className="w-[400px] h-[180px] self-center text-black rounded-[5px] border border-[#498EF3]"
                id="mensagem"
                name="mensagem"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#498EF3] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center gap-2"
              >
                Enviar{" "}
                <span className="text-2xl font-bold">
                  <Image src="/send.svg" alt="" width={16} height={16} />{" "}
                </span>
              </button>
            </div>
          </form>
          <div className="h-[550]">
            <h2 className="text-4xl text-center text-[#000000B2] mb-4">
              Vamos criar um projeto juntos, contate-me
            </h2>
            <ul className="flex justify-center gap-12 mb-16">
              <li className="w-12 h-12">
                <Link href="">
                  <Image
                    src="/inl.png"
                    alt="icon linkedin"
                    width={40}
                    height={20}
                  ></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image
                    src="/ghl.png"
                    alt="icon github"
                    width={40}
                    height={20}
                  ></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image
                    src="/gmail.svg"
                    alt="icon gmail"
                    width={40}
                    height={20}
                  ></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image
                    src="/whats.svg"
                    alt="icon whatsapp"
                    width={40}
                    height={20}
                  ></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image
                    src="/dc.svg"
                    alt="icon discord"
                    width={40}
                    height={20}
                  ></Image>
                </Link>
                .
              </li>
              <li className="w-12 h-12">
                <Link href="">
                  <Image
                    src="/insta.svg"
                    alt="icon instagram"
                    width={40}
                    height={20}
                  ></Image>
                </Link>
                .
              </li>
            </ul>
            <Image src="/contact_light.svg" alt="" width={550} height={390} />
          </div>
        </div>
        <p className="flex justify-center gap-2 text-center text-[#0F0E14B2]">
          Obrigado por optar pela{" "}
          <strong className="inline-flex text-black gap-1">
            <Image
              src="/sdd.svg"
              alt="logo da SAMSDEV empresa tech"
              width={16}
              height={16}
            ></Image>
            SAMSDEV
          </strong>
        </p>
      </section>
    </>
  );
};

export default Contatos;
