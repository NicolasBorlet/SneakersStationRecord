import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`Mail de confirmation envoyé à : ${email}`);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <footer className="w-full mt-[30px] ">
      <div className="bg-[#000000] px-[200px] py-9">
        <div>
          <img src="./src/assets/SHARED/logo_blanc.png" className="w-[130px]" />
        </div>
        <div className="text-[26px] text-[#FFFFFF] font-sans">
          Nos nouveautées dans votre boîte mail
        </div>
        <div className="w-[791px] flex justify-between">
          <div className="w-[653px] bg-[#171717]">
            <input
              className="w-full bg-[#171717] flex justify-center items-start h-full px-3 text-[#FFFFFF]"
              placeholder="VOTRE ADRESSE MAIL"
              type="email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="bg-[#FFFFFF] p-[15px]">
            <button
              className="uppercase text-[#000000]"
              type="submit"
              onClick={handleSubscribe}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-[#FFFFFF] min-h-[460px] px-[150px]"
        style={{
          backgroundImage: `url("./src/assets/SHARED/logo_footer.png")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div></div>
        <div className="flex">
          <div className="w-[30%]">
            <div></div>
            <div>
              <h3 className="font-special text-[24px]">
                Sneakers Station Radio
              </h3>
            </div>
            <div></div>
          </div>
          <div className="w-[30%]">
            <p>Informations</p>
            <li>Suivi des commandes</li>
            <li>Retour et échanges</li>
            <li>Nous contacter</li>
          </div>
          <div className="w-[30%]">
            <p>Informations</p>
            <li>Conditions générales de ventes</li>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
