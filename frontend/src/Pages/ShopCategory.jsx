import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { allProduct } = useContext(ShopContext);

    // Check if allProduct is defined
    if (!allProduct) {
        return <p>Loading...</p>; // Display a loading message or placeholder
    }

    return (
        <div className="shop-category">
            {/* Display banner image */}
            <img className="shopcategory-banner" src={props.banner} alt="Shop Category Banner" />
            
            {/* Display sorting and product count */}
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
                </div>
            </div>
            
            {/* Display products based on category */}
            <div className="shopcategory-products">
                {allProduct.map((item, i) => {
                    if (props.category === item.category) {
                        return (
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
                        );
                    }
                    return null; // Return null if the item does not match the category
                })}
            </div>
            
            {/* Load more button */}
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
}

export default ShopCategory;
