// import React, { useEffect, useState } from 'react';
// import './ListProduct.css';
// import cross_icon from '../Assets/cross_icon.png';

// const ListProduct = () => {
//     const [allproducts, setAllProducts] = useState([]);

//     const fetchInfo = async () => {
//         await fetch('http://localhost:4000/allproducts')
//             .then((res) => res.json())
//             .then((data) => { setAllProducts(data); });
//     };

//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     const removeProduct = async (id) => {
//         const response = await fetch('http://localhost:4000/removeproduct', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ id: id }),
//         });
//         const result = await response.json();
//         if (result.success) {
//             alert('Product removed successfully!');
//         } else {
//             alert('Failed to remove product: ' + result.message);
//         }
//         await fetchInfo();
//     };

//     return (
//         <div className='list-product'>
//             <div className="header-line">
//             <h1>All Product List</h1>
//             </div>
//             <div className="listproduct-allproducts">
//                 {allproducts.map((product) => (
//                     <div key={product.id} className="product-list"> {/* Moved key prop here */}
//                         <div className="product">
//                             <div className="listproduct-format-main listproduct-format">
//                                 <img src={product.image[0]} alt="" className="listproduct-product-icon" />
//                                 <div className="details">
//                                     <p className='title'>Name : {product.name}</p>
//                                     <p>Old Price : ${product.old_price}</p>
//                                     <p>New Price : ${product.new_price}</p>
//                                     <p>Category : {product.category}</p>
//                                     <p>Seller :  {product.seller}</p>
//                                 </div>
//                             </div>
//                             <div className="image">
//                                 <img onClick={() => { removeProduct(product.id); }} className='listproduct-remove-icon' src={cross_icon} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ListProduct;







// {/* <div className="listproduct-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Old Price</p>
//                 <p>New Price</p>
//                 <p>Category</p>
//                 <p>Remove</p>
//             </div> */}




import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../Assets/cross_icon.png';
import remove_icon from '../Assets/dustbin.png';

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => {
                //console.log("Fetched Products:", data); 
                setAllProducts(data);
            });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        const response = await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        });
        const result = await response.json();
        if (result.success) {
            alert('Product removed successfully!');
        } else {
            alert('Failed to remove product: ' + result.message);
        }
        await fetchInfo();
    };

    return (
        <div className='list-product'>
            <div className="header-line">
                <h1>All Product List</h1>
            </div>
            <div className="listproduct-allproducts">
                {allproducts.map((product) => (
                    <div key={product.id} className="product-list">
                        <div className="product">
                            <div className="listproduct-format-main listproduct-format">
                                <img src={product.image[0]} alt="" className="listproduct-product-icon" />
                                <div className="details">
                                    <p>no. {product.id}</p>
                                    <p className='title'>Name : {product.name}</p>
                                    <p>Old Price : ${product.old_price}</p>
                                    <p>New Price : ${product.new_price}</p>
                                    <p>Category : {product.category}</p>
                                    <p>Added by : {product.added_by}</p>
                                    <p>Seller : {product.seller}</p> {/* Ensure this line exists */}
                                </div>
                            </div>
                            <div className="image">
                                <img onClick={() => { removeProduct(product.id); }} className='listproduct-remove-icon' src={remove_icon} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
