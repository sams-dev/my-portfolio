import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada | samsdev</title>
      </Head>
      <div className="bg-[#252440] min-h-screen flex items-center justify-center">
        <section className="px-12 h-[800px] bg-white rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex justify-center pt-10 gap-4">
            <h1 className="text-6xl pt-10">Page not found</h1>
            <span className="text-9xl">404</span>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex justify-center">-
              <Image
                src="/error.svg"
                alt="Imagem ilustrativa de erro 404"
                width={538}
                height={604}
              ></Image>
            </div>
            <div className="flex flex-col justify-between items-center gap-6">
              <p className="text-3xl pt-20 text-center font-semibold">
                Oops, não conseguimos encontrar essa página!
              </p>

              <div className="flex flex-col pb-20 items-center pt-0 gap-4">
                <p>Clique no botão abaixo para ser redirecionado à página</p>

                <Link
                  href="/"
                  className="w-[315px] h-20 bg-[#498EF3] rounded-3xl text-white text-2xl font-bold flex items-center justify-center"
                >
                  Ir para à Página Inicial
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    
  );
};

export default NotFound;
