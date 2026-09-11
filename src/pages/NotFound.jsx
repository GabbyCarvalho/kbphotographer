import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const isPT = location.pathname.startsWith("/pt");

  const path = (route) => {
    return isPT ? `/pt${route}` : route;
  };

  return (
    <div className="notFoundContainer">
      <h1 className="notFoundTitle">OOOPS!</h1>
      
      <p className="notFoundText">
        {isPT ? (
          <>
            ESTA PÁGINA NÃO FOI ENCONTRADA, VOCÊ PODE VER TODAS AS GALERIAS{" "}
            <Link to={path("/galleries")} className="notFoundLink">
              AQUI
            </Link>{" "}
            OU{" "}
            <Link to={path("/contact")} className="notFoundLink">
              FALAR COMIGO AQUI
            </Link>
          </>
        ) : (
          <>
            THIS PAGE WAS NOT FOUND, YOU CAN VIEW ALL GALLERIES{" "}
            <Link to={path("/galleries")} className="notFoundLink">
              HERE
            </Link>{" "}
            OR{" "}
            <Link to={path("/contact")} className="notFoundLink">
              CONTACT ME HERE
            </Link>
          </>
        )}
      </p>
    </div>
  );
}