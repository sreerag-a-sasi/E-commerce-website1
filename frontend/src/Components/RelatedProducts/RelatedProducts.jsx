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
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({ product }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();  // Initialize useNavigate

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            if (!product?.category) {
                console.error("Product category is not available");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:4000/relatedproducts?category=${product.category}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch related products");
                }
                const data = await response.json();
                setRelatedProducts(data);
            } catch (error) {
                console.error("Error fetching related products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRelatedProducts();
    }, [product]);

    // Function to handle image click (navigate to product page)
    const handleImageClick = (id) => {
        navigate(`/product/${id}`);  // Navigate to the product page
    };

    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            {loading ? (
                <p>Loading related products...</p>
            ) : relatedProducts.length > 0 ? (
                <div className="relatedproducts-item">
                    {relatedProducts.map((item) => (
                        <Item 
                            key={item._id} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            S={item.S}    // Pass size S price
                            XXL={item.XXL} // Pass size XXL price
                            onImageClick={() => handleImageClick(item.id)}  // Pass handleImageClick as prop
                        />
                    ))}
                </div>
            ) : (
                <p>No related products found.</p>
            )}
        </div>
    );
};

export default RelatedProducts;
