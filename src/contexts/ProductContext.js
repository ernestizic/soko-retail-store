import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Assorted color plastic tube bottle",
            price: 240,
            img: "img/jordan-nix-tR-fqLlBg5c-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        },
        {
            id: 2,
            name: "Febreeze air spray can",
            price: 230,
            img: "img/laura-chouette-UZ2gS0NaFGE-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        },
        {
            id: 3,
            name: "Assorted make up brushes on white table ",
            price: 400,
            img: "img/miska-sage-QoCDPI1rdyg-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        },
        {
            id: 4,
            name: "White ceramic mug on white texile",
            price: 300,
            img: "img/onne-beauty-lZ7tao79Y1A-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        },
        {
            id: 5,
            name: "The Healer & The Rover",
            price: 250,
            img: "img/tusik-only-ayBCtRueEtI-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        }
    ]);


    return ( 
        <ProductContext.Provider value={{products}}>
            {props.children}
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;