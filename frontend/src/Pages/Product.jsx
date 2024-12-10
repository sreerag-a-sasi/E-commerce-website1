// import React, { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { useParams } from "react-router-dom";
// import Breadcrum from "../Components/Breadcrum/Breadcrum";
// import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
// import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
// import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

// const Product = () => {
//     const { allProduct } = useContext(ShopContext);
//     const { productId } = useParams();

//     // Check if allProduct is defined and find the product
//     const product = allProduct ? allProduct.find((e) => e.id === Number(productId)) : null;

//     return (
//         <div>
//             {product ? (
//                 <>
//                     <Breadcrum product={product} />
//                     <ProductDisplay product={product} />
//                     <DescriptionBox product={product} />
//                     <RelatedProducts product={product} />
//                 </>
//             ) : (
//                 <p>Loading...</p> // Display a loading message or a placeholder
//             )}
//         </div>
//     );
// };

// export default Product;




import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
    const { allProduct } = useContext(ShopContext);
    const { productId } = useParams();  // This will get the productId from the URL
    const navigate = useNavigate();

    useEffect(() => {
        if (!productId) {
            navigate("/"); // Redirect to home if no productId is found
        }
    }, [productId, navigate]);

    // Log to check if the products are being retrieved properly
    console.log("allProduct:", allProduct);

    // Find the product that matches the productId from the URL
    const product = Array.isArray(allProduct)
        ? allProduct.find((e) => e.id === Number(productId))  // Ensure 'id' matches the correct property of your products
        : null;

    if (!product) {
        return <p>Product not found. Please check the URL or try again later.</p>;
    }

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox product={product} />
            <RelatedProducts product={product} />
        </div>
    );
};

export default Product;
