import Link from "next/link";
import Image from "next/image";

const Links = () => {
    const linkList = [
  {
    "href": "https://www.linkedin.com/in/samsdevtech/",
    "alt": "icon linkedin",
    "src": "/inl.png"
  },
  {
    "href": "samsdev.23@gmail.com",
    "alt": "icon gmail",
    "src": "/gmail.svg"
  },
  {
    "href": "https://wa.me/5551983494279",
    "alt": "icon whatsapp",
    "src": "/whats.svg"
  },
  {
    "href": "https://www.instagram.com/samsdevtech/",
    "alt": "icon instagram",
    "src": "/insta.svg"
  }
]
  return (
    <ul className="flex justify-center gap-12 mb-16">
      {linkList.map((link, index) => (
      <li key={index} className="w-12 h-12">
        <Link href={link.href}>
          <Image
            src={link.src}
            alt={link.alt}
            width={40}
            height={20}
          ></Image>
        </Link>
      </li>
      ))}
    </ul>
  );
};

export default Links;
