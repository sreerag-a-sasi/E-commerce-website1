// import React from 'react'
// import './RelatedProducts.css'
// import data_product from '../Assets/data'
// import Item from '../Item/Item'

// export const RelatedProducts = () => {
//   return (
//     <div className='relatedproducts'>
//         <h1>Related Products</h1>
//         <hr />
//         <div className="relatedproducts-item">
//             {data_product.map((item,i)=>{
//                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//             })}
//         </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';

export const RelatedProducts = () => {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/relatedproducts');
                const data = await response.json();
                setRelatedProducts(data);
            } catch (error) {
                console.error("Error fetching related products:", error);
            }
        };

        fetchRelatedProducts();
    }, []);

    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {relatedProducts.map((item, i) => (
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price} 
                    />
                ))}
            </div>
        </div>
    );
}

// export default RelatedProducts;
