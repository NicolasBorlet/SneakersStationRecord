import { useState } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "../../atoms/shared-Atoms";
import { error, success } from "../component/ToastComponent";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setIsToken] = useRecoilState(tokenState);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { accessToken } = await response.json();
        const { access_token: token } = accessToken;
        localStorage.setItem("token", token);
        console.log("Connexion successful! Here is your token: ", token);
        setIsToken(token);
        success({
          message: "Connexion réussie !",
        });
      } else {
        setErrorMessage("Invalid username or password");
        error({
          message: "Identifiant ou mot de passe incorrect !",
        });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="w-[50%]">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="submit"
            className="bg-[#000000] text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5"
          >
            Se connecter
          </button>
        </form>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  );
};

export default Login;
