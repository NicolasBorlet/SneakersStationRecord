import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1>Il semblerait que vous vous êtes perdu !</h1>
      <p>Cliquer sur ce lien pour retourner sur la page d'accueil !</p>
      <button className="bg-slate-200 p-2 rounded-2xl">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
