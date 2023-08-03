import SignIn from "../layout/SignIn";
import Login from "../layout/Login";
import Layout from "../layout/Layout";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { tokenState } from "../../atoms/shared-Atoms";
import { error, success } from "../component/ToastComponent";
import jwt_decode from "jwt-decode";

const AccountScreen = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const [userData, setUserData] = useState<any>([]);
  const [isModifying, setIsModifying] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [mail, setMail] = useState<string>("");

  useEffect(() => {
    console.log(token);
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      const decodedToken = jwt_decode(storedToken);
      setUserData(decodedToken);
      setName(decodedToken.lastName);
      setFirstName(decodedToken.firstName);
      setMail(decodedToken.mail);
    }

    console.log(userData);
  }, [token]);

  return (
    <Layout>
      {token ? (
        <div>
          <h1 className="text-[30px]">Information du compte</h1>
          {isModifying ? (
            <div>
              <form
                className="flex flex-col px-60 mt-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsModifying(!isModifying);

                  if (password !== passwordConfirm) {
                    error({
                      message: "Les mots de passe ne correspondent pas !",
                    });
                  }
                  if (password.length < 8) {
                    error({
                      message:
                        "Le mot de passe doit contenir au moins 8 caractères !",
                    });
                  }
                  if (name.length < 2) {
                    error({
                      message: "Le nom doit contenir au moins 2 caractères !",
                    });
                  }
                  if (firstName.length < 2) {
                    error({
                      message:
                        "Le prénom doit contenir au moins 2 caractères !",
                    });
                  }

                  //update user
                  if (password === passwordConfirm && password.length >= 8) {
                    const data = {
                      UserID: userData.id,
                      UserLastName: name,
                      UserFirstName: firstName,
                      UserEmail: mail,
                      UserPassword: password,
                      UserRole: userData.role,
                    };

                    fetch("http://localhost:3000/user/update", {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    })
                      .then((response) => {
                        if (response.ok) {
                          success({
                            message: "Les informations ont été modifiées !",
                          });

                          return response.json();
                        } else {
                          error({
                            message:
                              "Une erreur est survenue lors de la modification des informations !",
                          });
                        }
                      })
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  } else if (
                    password === passwordConfirm &&
                    password.length === 0
                  ) {
                    const data = {
                      UserID: userData.id,
                      UserLastName: name,
                      UserFirstName: firstName,
                      UserEmail: mail,
                      UserRole: userData.role,
                    };

                    fetch("http://localhost:3000/user/update", {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    })
                      .then((response) => {
                        if (response.ok) {
                          success({
                            message: "Les informations ont été modifiées !",
                          });

                          return response.json();
                        } else {
                          error({
                            message:
                              "Une erreur est survenue lors de la modification des informations !",
                          });
                        }
                      })
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  }
                }}
              >
                <label htmlFor="name">Nom</label>
                <input
                  className="border-[1px] border-[#000000] rounded-[5px] px-[10px] py-[5px] mt-2"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="firstName">Prénom</label>
                <input
                  className="border-[1px] border-[#000000] rounded-[5px] px-[10px] py-[5px] mt-2"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <label htmlFor="mail">E-mail</label>
                <input
                  className="border-[1px] border-[#000000] rounded-[5px] px-[10px] py-[5px] mt-2"
                  type="text"
                  id="mail"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
                <label htmlFor="password">Mot de passe</label>
                <input
                  className="border-[1px] border-[#000000] rounded-[5px] px-[10px] py-[5px] mt-2"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="passwordConfirm">
                  Confirmer le mot de passe
                </label>
                <input
                  className="border-[1px] border-[#000000] rounded-[5px] px-[10px] py-[5px] mt-2"
                  type="password"
                  id="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                  }}
                />
                <button
                  className="relative bg-[#FFFFFF] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5 transition-all duration-300 border-[1px] border-[#000000]"
                  type="submit"
                >
                  Valider les modifications
                </button>
              </form>
            </div>
          ) : (
            <div>
              <p className="text-[16px]">ID: {userData.id}</p>{" "}
              <p className="text-[16px]">Rôle: {userData.role}</p>{" "}
              <p className="text-[16px]">Prénom: {userData.firstName}</p>{" "}
              <p className="text-[16px]">Nom: {userData.lastName}</p>{" "}
              <p className="text-[16px]">E-mail: {userData.mail}</p>{" "}
            </div>
          )}
          <div className="flex flex-col px-60 mt-10">
            <button
              className="relative bg-[#FFFFFF] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5 transition-all duration-300 border-[1px] border-[#000000]"
              onClick={() => {
                setIsModifying(!isModifying);
              }}
            >
              {isModifying ? (
                <span>Annuler</span>
              ) : (
                <span>Modifier les informations</span>
              )}
            </button>
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
