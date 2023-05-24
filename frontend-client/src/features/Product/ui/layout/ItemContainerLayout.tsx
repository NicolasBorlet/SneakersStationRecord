import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../../shared/hooks/useProduct";
import { ItemComponent } from "../component/ItemComponent";
import Layout from "../../../../shared/ui/layout/Layout";

export interface ItemProps {
  product: any;
}

const ItemContainerLayout: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Layout>
      <ItemComponent product={product} />
    </Layout>
  );
};

export default ItemContainerLayout;
