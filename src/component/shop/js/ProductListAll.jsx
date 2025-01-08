import React, { useEffect, useState } from "react";
import style from "./css/ProductListAll.module.css";
import axios from "axios";

export default function ProductListAll() {
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:39090/api/productlist")
      .then((response) => {
        setProductData(response.data.list);
      })
      .catch((error) => {
        console.error("데이터 수신 실패:", error);
      });
  }, []);

  // 제품(프로젝트) 카드 클릭 시 팝업 열기
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // 팝업 닫기
  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={style.container}>
      <div className={style.semiJump}></div>
      <h2 className={style.title}>Project List</h2>

      {/* 프로젝트(제품) 리스트 영역 */}
      <div className={style.productContainer}>
        {productData.map((product) => (
          <div
            key={product.id}
            className={style.product}
            onClick={() => handleProductClick(product)}
          >
            {/* 서버에서 받은 데이터 중 imageSrc, name 필드를 사용 */}
            <img
              src={product.imageSrc}
              className={style.productImage}
              alt={product.name}
            />
            <div className={style.textBox}>{product.name}</div>
          </div>
        ))}
      </div>

      {/* 선택된 상품(프로젝트) 상세 팝업 */}
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
              src={selectedProduct.imageSrc}
              className={style.popupImage}
              alt={selectedProduct.name}
            />
            <div className={style.infoText}>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <p>Start Date : {selectedProduct.startDate}</p>
              <p>End Date : {selectedProduct.endDate}</p>
            </div>
          </div>
        </div>
      )}
      <div className={style.semiJump}></div>
    </div>
  );
}
