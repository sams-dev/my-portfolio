import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-red-600">
      <h1>404</h1>
      <p>Oops, não conseguimos encontrar essa página!</p>
      <div>
        <span>Clique no botão abaixo para ser redirecionado a página </span>
        <Link href="/">Ir para à Página Inicial</Link>
      </div>
    </div>
  )
};

export default NotFound;
