import React, { useState } from "react";
import style from "./css/ProductListAll.module.css";

const testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in";
const productData = [
    { id: 1, name: "Product 1", description: testText, price: "100,000 원", coupangLink: "https://coupang.com", naverLink: "https://shopping.naver.com" },
    { id: 2, name: "Product 2", description: testText, price: "20,000 원", coupangLink: "https://coupang.com", naverLink: "https://shopping.naver.com" },
    { id: 3, name: "Product 3", description: testText, price: "30,000 원", coupangLink: "https://coupang.com", naverLink: "https://shopping.naver.com" },
    { id: 4, name: "Product 4", description: testText, price: "40,000 원", coupangLink: "https://coupang.com", naverLink: "https://shopping.naver.com" },
    { id: 5, name: "Product 5", description: testText, price: "50,000 원", coupangLink: "https://coupang.com", naverLink: "https://shopping.naver.com" },
    { id: 6, name: "Product 6", description: testText, price: "60,000 원", coupangLink: "https://coupang.com", naverLink: "https://shopping.naver.com" },
    { id: 6, name: "Product 7", description: testText, price: "50,000 원", coupangLink: "https://coupang.com", naverLink: "https://shopping.naver.com" },
    { id: 6, name: "Product 8", description: testText, price: "70,000 원", coupangLink: "https://coupang.com", naverLink: "https://shopping.naver.com" },
];

export default function ProductListAll() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <div className={style.container}>
            <div className={style.semiJump}></div>
            <h2 className={style.title}>Product List</h2>
            <div className={style.productContainer}>
                {productData.map((product) => (
                    <div
                        key={product.id}
                        className={style.product}
                        onClick={() => handleProductClick(product)}
                    >
                        <img
                            //   src={`/image/image${product.id}.png`}
                            src={`/image/image.png`}
                            className={style.productImage}
                            alt={product.name}
                        />
                        <div className={style.textBox}>{product.name}</div>
                    </div>
                ))}
            </div>

            {/* Popup for Product Details */}
            {selectedProduct && (
                <div className={style.popupOverlay} onClick={handleClosePopup}>
                    <div
                        className={style.popupContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={style.closeButton} onClick={handleClosePopup}>
                            X
                        </button>
                        <img
                            // src={`/image/image${product.id}.png`}
                            src="/image/image.png"
                            className={style.popupImage}
                        />
                        <div className={style.infoText}>
                            <h3>{selectedProduct.name}</h3>
                            <p>{selectedProduct.description}</p>
                            <p>{selectedProduct.price}</p>
                            <div className={style.shopIcon}>
                                <a href={selectedProduct.coupangLink} target="_blank"><img src="/image/coupang.jpg" className={style.coupangIcon}/></a>
                                <a href={selectedProduct.naverLink} target="_blank"><img src="/image/naver.jpg" className={style.naverIcon}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
