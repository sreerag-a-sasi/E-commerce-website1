import React, { useContext, useState } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { allProduct } = useContext(ShopContext);
    const [displayCount, setDisplayCount] = useState(16);
    const [showAll, setShowAll] = useState(false);
    const [sortOption, setSortOption] = useState(''); // Default value is empty

    // Check if allProduct is defined
    if (!allProduct || allProduct.length === 0) {
        return <p>Loading...</p>; // Display a loading message or placeholder
    }

    const sortProducts = (products) => {
        if (sortOption === 'price') {
            return products.sort((a, b) => a.new_price - b.new_price);
        } else if (sortOption === 'date') {
            return products.sort((a, b) => new Date(b.date) - new Date(a.date));
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
            setDisplayCount(totalProducts);
        }
        setShowAll(!showAll);
    };

    const productsToShow = sortProducts(allProduct.filter(item => item.category === props.category)).slice(0, displayCount);
    const totalProducts = allProduct.filter(item => item.category === props.category).length;

    return (
        <div className="shop-category">
            {/* Display banner image */}
            <img className="shopcategory-banner" src={props.banner} alt="Shop Category Banner" />
            
            {/* Display sorting and product count */}
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing {totalProducts > 1 ? 1 : totalProducts}-{displayCount > totalProducts ? totalProducts : displayCount}</span> out of {totalProducts} products
                </p>
                <div className="shopcategory-sort-container">
                    <select className="shopcategory-sort" onChange={handleSortChange} value={sortOption} defaultValue="">
                        <option value="" disabled hidden>Sort by</option>
                        <option value="date">Date Added</option>
                        <option value="price">Lowest Price</option>
                    </select>
                </div>
            </div>
            
            {/* Display products based on category */}
            <div className="shopcategory-products">
                {productsToShow.map((item, i) => (
                    <Item 
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        category={item.category}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        description={item.description}
                    />
                ))}
            </div>
            
            {/* Load more button */}
            <div className="shopcategory-loadmore" onClick={handleExploreMore}>
                {showAll ? "Hide Products" : "Explore More"}
            </div>
        </div>
    );
}

export default ShopCategory;
