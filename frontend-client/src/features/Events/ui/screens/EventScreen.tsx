import Layout from "../../../../shared/ui/layout/Layout";
import ItemEventComponent from "../components/ItemEventComponent";
import SpacerItem from "../components/SpacerItem";

const EventScreen = () => {
  return (
    <Layout
      imgSrc="./src/assets/EVENTS/event-banner.jpg"
      title="Evenements"
      color="#980066"
    >
      <div className="w-full">
        <ItemEventComponent
          type={1}
          date="10 avril 2024"
          image="./src/assets/EVENTS/event-1.jpg"
          title="Ouverture de la boutique"
          hour="9H-17h"
        />
        <SpacerItem type={1} />
        <ItemEventComponent
          type={2}
          date="7 mai 2024"
          image="./src/assets/EVENTS/event-2.jpg"
          title="Graffiti du mur de la boutique"
          hour="10H-15h"
        />
        <SpacerItem type={2} />
      </div>
    </Layout>
  );
};

export default EventScreen;
