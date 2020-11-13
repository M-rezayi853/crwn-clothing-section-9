import React, { useState } from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';


const Shop = props => {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {collections.map(collection => (
                <CollectionPreview 
                    key={collection.id}
                    title={collection.title}
                    items={collection.items}
                />
            ))}
        </div>
    );
};


export default Shop;