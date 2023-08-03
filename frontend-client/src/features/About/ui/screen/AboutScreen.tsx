import Spacer from "../../../../shared/ui/component/Spacer";
import Layout from "../../../../shared/ui/layout/Layout";

const AboutScreen = () => {
  return (
    <Layout
      imgSrc="./src/assets/ABOUT/about-banner.jpg"
      title=""
      color="#980066"
    >
      <div className="w-full">
        <Spacer size={100} />
        <div className="mb-[150px]">
          <div className="mb-[50px]">
            <h3 className="uppercase font-semibold">Le vinyle et la sneakers</h3>
            <p>
              Le concept store Sneakers Station Records regroupe deux univers avec
              un point commun : l’expression de son style. 
              <br>
              </br>
              <br>
              </br>
              La musique nous permet
              d’exprimer notre style, selon le genre écouté et le canal avec
              lequel nous l’écoutons !            
              <br>
              </br>
              <br>
              </br>
              Les sneakers permettent d’exprimer son
              style vestimentaire, chez nous vous trouverez des sneakers pour tous
              les goûts qui sauront vous représenter ! 
              <br>
              </br>
              <br>
              </br>
              Pourquoi pas lier ces deux
              univers dans une seule boutique et vous permettre de choisir votre
              paire de sneakers sur votre morceau préféré ? C’est ce que vous
              trouverez chez nous !
            </p>
          </div>
          <div className="text-center flex items-center justify-center">
            <img className="max-w-[707px]" src="./src/assets/ABOUT/about-img-illustration.png" alt="" />
          </div>
        </div>
        <div>
          <div className="mb-[50px]">
            <h3 className="uppercase font-semibold">Le côté bar</h3>
            <p>
              Au sein de notre boutique vous pouvez profiter d’un moment de détente, dans notre partie bar lounge.              <br>
              </br>
              <br>
              </br>
              A la carte : des smoothies avec des produits locaux.              <br>
              </br>
              <br>
              </br>
              Vous pouvez choisir le morceau sur lequel vous détendre et dégustez votre smoothie. Quoi de mieux que 5 minutes de pause pour choisir la meilleure paire de sneakers pour vous ?
            </p>
          </div>
          <div className="text-center flex items-center justify-center">
            <div className="max-w-[1061px] grid grid-cols-4 gap-[40px]">
              <div>
                <img src="./src/assets/ABOUT/about-smoothie-2.png" alt="" />
              </div>
              <div> 
                <img src="./src/assets/ABOUT/about-smoothie-2.png" alt="" />
                </div>
              <div> 
                <img src="./src/assets/ABOUT/about-smoothie-2.png" alt="" />
                </div>
              <div> 
                <img src="./src/assets/ABOUT/about-smoothie-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutScreen;
