// import React, { useContext, useState } from "react";
// import './CSS/ShopCategory.css';
// import { ShopContext } from '../Context/ShopContext';
// import Item from '../Components/Item/Item';

// const ShopCategory = (props) => {
//     const { allProduct } = useContext(ShopContext);
//     const [displayCount, setDisplayCount] = useState(16);
//     const [showAll, setShowAll] = useState(false);
//     const [sortOption, setSortOption] = useState(''); // Default value is empty

//     // Check if allProduct is defined
//     if (!allProduct || allProduct.length === 0) {
//         return <p>Loading...</p>; // Display a loading message or placeholder
//     }

//     const sortProducts = (products) => {
//         if (sortOption === 'price') {
//             return products.sort((a, b) => a.new_price - b.new_price);
//         } else if (sortOption === 'date') {
//             return products.sort((a, b) => new Date(b.date) - new Date(a.date));
//         }
//         return products;
//     };

//     const handleSortChange = (e) => {
//         setSortOption(e.target.value);
//     };

//     const handleExploreMore = () => {
//         if (showAll) {
//             setDisplayCount(16);
//         } else {
//             setDisplayCount(totalProducts);
//         }
//         setShowAll(!showAll);
//     };

//     const productsToShow = sortProducts(allProduct.filter(item => item.category === props.category)).slice(0, displayCount);
//     const totalProducts = allProduct.filter(item => item.category === props.category).length;

//     return (
//         <div className="shop-category">
//             {/* Display banner image */}
//             <img className="shopcategory-banner" src={props.banner} alt="Shop Category Banner" />
            
//             {/* Display sorting and product count */}
//             <div className="shopcategory-indexSort">
//                 <p>
//                     <span>Showing {totalProducts > 1 ? 1 : totalProducts}-{displayCount > totalProducts ? totalProducts : displayCount}</span> out of {totalProducts} products
//                 </p>
//                 <div className="shopcategory-sort-container">
//                     <select className="shopcategory-sort" onChange={handleSortChange} value={sortOption}>
//                         <option value="" disabled hidden>Sort by</option>
//                         <option value="date">Date Added</option>
//                         <option value="price">Lowest Price</option>
//                     </select>
//                 </div>
//             </div>
            
//             {/* Display products based on category */}
//             <div className="shopcategory-products">
//                 {productsToShow.map((item, i) => (
//                     <Item 
//                         key={i}
//                         id={item.id}
//                         name={item.name}
//                         image={item.image}
//                         category={item.category}
//                         new_price={item.new_price}
//                         old_price={item.old_price}
//                         description={item.description}
//                     />
//                 ))}
//             </div>
            
//             {/* Load more button */}
//             <div className="shopcategory-loadmore" onClick={handleExploreMore}>
//                 {showAll ? "Hide Products" : "Explore More"}
//             </div>
//         </div>
//     );
// }

// export default ShopCategory;



import React, { useState, useEffect } from "react";
import './CSS/ShopCategory.css';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const [products, setProducts] = useState([]);
    const [displayCount, setDisplayCount] = useState(16);
    const [showAll, setShowAll] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:4000/allproducts`, {
                    headers: {
                        'auth-token': localStorage.getItem('auth-token') || '', // Include auth-token if available
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    // Filter out blocked products and match the selected category
                    const filteredProducts = data.filter(
                        product => !product.blocked && product.category === props.category
                    );
                    setProducts(filteredProducts);
                } else {
                    console.error("Failed to fetch products");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [props.category]);

    const sortProducts = (products) => {
        if (sortOption === 'price') {
            return [...products].sort((a, b) => (a.S || 0) - (b.S || 0)); // Use S for price sorting
        } else if (sortOption === 'date') {
            return [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        return products;
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleExploreMore = () => {
        if (showAll) {
            setDisplayCount(16);
        } else {
            setDisplayCount(products.length);
        }
        setShowAll(!showAll);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    const sortedProducts = sortProducts(products).slice(0, displayCount);

    return (
        <div className="shop-category">
            {/* Display banner image */}
            <img className="shopcategory-banner" src={props.banner} alt="Shop Category Banner" />

            {/* Display sorting and product count */}
            <div className="shopcategory-indexSort">
                <p>
                    <span>
                        Showing {Math.min(displayCount, products.length)} out of {products.length} products
                    </span>
                </p>
                <div className="shopcategory-sort-container">
                    <select
                        className="shopcategory-sort"
                        onChange={handleSortChange}
                        value={sortOption}
                    >
                        <option value="" disabled hidden>
                            Sort by
                        </option>
                        <option value="date">Date Added</option>
                        <option value="price">Lowest Price</option>
                    </select>
                </div>
            </div>

            {/* Display products */}
            <div className="shopcategory-products">
                {sortedProducts.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id} // Pass only the id, not _id
                        name={item.name}
                        image={item.image}
                        category={item.category}
                        S={item.S} // Pass the S price
                        XXL={item.XXL} // Pass XXL price if needed
                        description={item.description}
                    />
                ))}
            </div>

            {/* Load more button */}
            {products.length > displayCount && (
                <div className="shopcategory-loadmore" onClick={handleExploreMore}>
                    {showAll ? "Hide Products" : "Explore More"}
                </div>
            )}
        </div>
    );
};

export default ShopCategory;
