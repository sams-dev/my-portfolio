import Image from "next/image";

const Techs = () => {
  const techList = [
  {
    imageIcon: {
      url: "/html.svg",
      alt: "Logo do HTML5 - Linguagem de marcação para web",
    },
    nome: "HTML 5",
  },
  {
    imageIcon: {
      url: "/css.svg",
      alt: "Logo do CSS3 - Folhas de estilo em cascata",
    },
    nome: "CSS 3",
  },
  {
    imageIcon: {
      url: "/js.svg",
      alt: "Logo do JavaScript - Linguagem de programação para web",
    },
    nome: "JavaScript",
  },
  {
    imageIcon: {
      url: "/react.svg",
      alt: "Logo do React JS - Biblioteca JavaScript para interfaces",
    },
    nome: "React JS",
  },
  {
    imageIcon: {
      url: "/nextjs.svg",
      alt: "Logo do Next.js - Framework React para aplicações web",
    },
    nome: "Next Js",
  },
  {
    imageIcon: {
      url: "/twcss.svg",
      alt: "Logo do Tailwind CSS - Framework utilitário para estilos",
    },
    nome: "Tailwind CSS",
  },
  {
    imageIcon: {
      url: "/node.svg",
      alt: "Logo do Node.js - Runtime JavaScript para backend",
    },
    nome: "Node JS",
  },
  {
    imageIcon: {
      url: "/mongo.svg",
      alt: "Logo do MongoDB - Banco de dados NoSQL",
    },
    nome: "Mongo DB",
  },
  {
    imageIcon: {
      url: "/mysql.svg",
      alt: "Logo do MySQL - Sistema de gerenciamento de banco de dados relacional",
    },
    nome: "MySQL",
  },
];

  return (
    <ul className="flex flex-wrap justify-center gap-[30px] mt-[40px]">
      {techList.map((tech, index) => (
        <li
          key={index}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[25] shadow-md">
            <Image
              src={tech.imageIcon.url}
              alt={tech.imageIcon.alt}
              width={60}
              height={60}
            />
          </div>
          <h2 className="text-center text-sm text-gray-400 mt-2">
            {tech.nome}
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default Techs;
