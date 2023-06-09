import SignIn from "../layout/SignIn";
import Login from "../layout/Login";
import Layout from "../layout/Layout";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { tokenState } from "../../atoms/shared-Atoms";
import { success } from "../component/ToastComponent";

const AccountScreen = () => {
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    console.log(token);
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <Layout>
      {token ? (
        <div>
          <button
            className="bg-[#000000] text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px]"
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
