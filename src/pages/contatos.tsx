import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Form from "@/Components/Form";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | samsdev</title>
      </Head>
      <section className="mx-[175px] mt-[40px] pb-[80px] px-12 h-[800px] bg-white rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <h1
          className={`${roboto.className} text-gray-800 text-center font-medium text-5xl pt-12 pb-[75px]`}
        >
          CONTATOS
        </h1>
        <div className="grid grid-cols-2 justify-items-center">
          <div className="h-[550]">
            <h2
              className={` ${roboto.className} text-3xl text-center text-gray-600 mb-4`}
            >
              Vamos criar um projeto juntos, contate-me diretamente
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
          <div className="justify-items-center">
            <h2 className={` ${roboto.className} text-3xl text-center text-gray-600 mb-8`}>
              ou me mande uma proposta que eu entro em contato
            </h2>
          <Form/>
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
