import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
    const { allProduct } = useContext(ShopContext);
    const { productId } = useParams();

    // Check if allProduct is defined and find the product
    const product = allProduct ? allProduct.find((e) => e.id === Number(productId)) : null;

    return (
        <div>
            {product ? (
                <>
                    <Breadcrum product={product} />
                    <ProductDisplay product={product} />
                    <DescriptionBox product={product} />
                    <RelatedProducts product={product} />
                </>
            ) : (
                <p>Loading...</p> // Display a loading message or a placeholder
            )}
        </div>
    );
};

export default Product;
