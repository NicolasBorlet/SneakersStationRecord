import { useState } from "react";
import { UserProps } from "../../types/shared-type";
import { ToastContainer } from "react-toastify";
import { error, success } from "../component/ToastComponent";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Check if password and passwordConfirm are the same
    if (password !== passwordConfirm) {
      error({
        message: "Les mots de passe ne correspondent pas !",
      });
      return;
    }

    //Check if email is valid
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (!emailRegex.test(email)) {
      error({
        message: "L'adresse mail n'est pas valide !",
      });
      return;
    }

    // Check if email is already in use
    const usersResponse = await fetch("http://localhost:3000/user/all");
    const users = await usersResponse.json();
    const userWithEmail = users.find(
      (user: UserProps) => user.UserEmail === email
    );
    if (userWithEmail) {
      error({
        message: "Cette adresse mail est déjà utilisée !",
      });
      return;
    } else {
      // Create new user if email is not in use
      const response = await fetch("http://localhost:3000/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          UserEmail: email,
          UserPassword: password,
          UserFirstName: firstName,
          UserLastName: lastName,
          UserRole: "MEMBER",
          UserRegistrationTime: new Date(),
        }),
      });
      const data = await response.json();
      console.log(data);

      // Display success message
      success({
        message: "Votre compte a bien été créé !",
      });
    }
  };

  return (
    <div className="w-[50%]">
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Il semblerait que le format de votre email ne correspond pas."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
          >
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
          >
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastname(event.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password-create"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
          >
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            id="password-confirm"
            value={passwordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#000000] text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5"
          >
            Créer son compte
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SignIn;
