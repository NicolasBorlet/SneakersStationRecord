import { ChangeEvent, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`Mail de confirmation envoyé à : ${email}`);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <footer className="w-full mt-[30px] ">
      <div className="bg-[#000000] lg:px-[200px] px-[25px] py-9">
        <div>
          <img src="./src/assets/SHARED/logo_blanc.png" className="w-[100px]" />
        </div>
        <div className="md:text-[26px] text-[15px] mb-2 md:mt-0 text-[#FFFFFF] font-sans">
          Nos nouveautées dans votre boîte mail
        </div>
        <div className="md:w-[65%] w-[100%] flex justify-between">
          <div className="w-[100%] bg-[#171717]">
            <input
              className="w-full bg-[#171717] flex justify-center items-start h-full px-3 text-[#FFFFFF] text-[11px]"
              placeholder="VOTRE ADRESSE MAIL"
              type="email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="bg-[#FFFFFF] md:p-[15px] p-[5px]">
            <button
              className="uppercase text-[#000000] text-[11px]"
              type="submit"
              onClick={handleSubscribe}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-[#FFFFFF] min-h-[460px] lg:px-[150px] px-[25px]"
        style={{
          backgroundImage: `url("./src/assets/SHARED/logo_footer.png")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:flex">
          <div className="md:w-[30%]">
            <div className="w-full">
              <h3 className="font-special text-[18px]">
                Sneakers Station Record
              </h3>
            </div>
          </div>
          <div className="md:w-[30%]">
            <p>Informations</p>
            <li>Suivi des commandes</li>
            <li>Retour et échanges</li>
            <li>Nous contacter</li>
          </div>
          <div className="md:w-[30%]">
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
