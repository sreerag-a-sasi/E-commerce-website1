// import React, { useEffect, useState } from "react";
// import './Popular.css'
// import Item from'../Item/Item'



// const Popular = () => {

//     const [popularProduct,setPopularProducts] = useState([]);

//     useEffect(()=>{
//         fetch('http://localhost:4000/popularinwomen')
//         .then((response)=>response.json())
//         .then((data)=>setPopularProducts(data));
//     },[])

//     return(
//         <div className="popular">
//             <h1>POPULAR IN WOMEN</h1>
//             <hr />
//             <div className="popular-item">
//                 {popularProduct.map((item,i)=> {
//                     return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Popular;



import React, { useEffect, useState } from "react";
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
    const [popularProduct, setPopularProducts] = useState([]);

    useEffect(() => {
        const fetchPopularProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/popularinwomen');
                const data = await response.json();
                setPopularProducts(data);
            } catch (error) {
                console.error("Error fetching popular products:", error);
            }
        };

        fetchPopularProducts();
    }, []);

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProduct.map((item, i) => (
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        S={item.S}    // Pass size S price
                        XXL={item.XXL} // Pass size XXL price
                    />
                ))}
            </div>
        </div>
    );
}

export default Popular;
