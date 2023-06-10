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
      <div className="bg-[#FFFFFF] min-h-[460px] lg:px-[150px] px-[25px] bg-contain bg-no-repeat bg-center bg-[url('./src/assets/SHARED/logo_footer.png')]">
        <div className="lg:flex justify-center items-center">
          <div className="md:w-[30%]">
            <div className="w-full">
              <div className="mb-4">logo srr</div>
              <h3 className="font-special text-[18px] mb-5">
                Sneakers Station Record
              </h3>
              <div>
                <ul className="mb-5">
                  <li>34 rue Carnot</li>
                  <li>74000 Annecy</li>
                </ul>
                <ul>
                  <li>04 50 51 03 86</li>
                  <li>contact@ssr.fr</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[30%]">
            <ul>
              <p className="text-[20px] font-semibold mb-5">Informations</p>
              <li className="text-[15px] font-semibold">Suivi des commandes</li>
              <li className="text-[15px] font-semibold">Retour et échanges</li>
              <li className="text-[15px] font-semibold">Nous contacter</li>
            </ul>
          </div>
          <div className="md:w-[30%]">
            <ul>
              <p className="text-[20px] font-semibold mb-5">Informations</p>
              <li className="text-[15px] font-semibold">
                Conditions générales de ventes
              </li>
              <li className="text-[15px] font-semibold">Mentions légales</li>
              <li className="text-[15px] font-semibold">
                Politique de confidentialité
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
