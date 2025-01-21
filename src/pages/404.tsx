import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-red-600">
      <h1> Page not found 
        <span>404</span>
      </h1>
      <p>Oops, não conseguimos encontrar essa página!</p>
      <span>Clique no botão abaixo para ser redirecionado a página </span>
      <div>
        <Link href="/">Ir para à Página Inicial</Link>
      </div>
    </div>
  )
};

export default NotFound;
