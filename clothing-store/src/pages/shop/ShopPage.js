import React, { useState } from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  console.log(collections);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
