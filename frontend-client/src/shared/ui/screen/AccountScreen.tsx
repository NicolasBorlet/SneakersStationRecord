import SignIn from "../layout/SignIn";
import Login from "../layout/Login";
import Layout from "../layout/Layout";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { tokenState } from "../../atoms/shared-Atoms";
import { success } from "../component/ToastComponent";

const AccountScreen = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    console.log(token);
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token, setToken]);

  //recup user information
  useEffect(() => {
    if (token) {
      fetch("http://localhost:3000/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (userData.ok) {
      userData.json().then((data: any) => {
        console.log("user data", data); // Afficher les données de l'utilisateur
        // Faire quelque chose avec les données de l'utilisateur
      });
    } else {
      console.log(
        "Une erreur s'est produite lors de la récupération des données de l'utilisateur."
      );
    }
  }, [token, setUserData]);

  return (
    <Layout>
      {token ? (
        <div>
          <h1 className="text-[30px]">Information du compte</h1>
          <p className="text-[20px]">Nom: {userData.UserLastName}</p>
          <button
            className="relative bg-[#FFFFFF] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5 transition-all duration-300 border-[1px] border-[#000000]"
            onClick={() => {
              localStorage.removeItem("token");
              setToken("");
              success({
                message: "Déconnexion réussie !",
              });
            }}
          >
            Se déconnecter
          </button>
        </div>
      ) : (
        <div className="w-full flex gap-5 px-3">
          <Login />
          <SignIn />
        </div>
      )}
    </Layout>
  );
};

export default AccountScreen;
