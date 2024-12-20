import style from './css/ProductList.module.css'

export default function ProductList() {
    return (
        <div>
            <div className={style.semiJump}></div>
            <h2 className={style.title}>Lorem ipsum</h2>
            
            <div className={style.ProductListContainer}>
                <div className={style.product1}>
                    <img src='/image/image.png' className={style.productImage1} />
                    <div className={style.productText}>
                        <h3 className={style.productFont}>Lorem ipsum</h3>
                        <p className={style.productFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className={style.product2}>
                    <div className={style.productText}>
                        <h3 className={style.productFont}>Lorem ipsum</h3>
                        <p className={style.productFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <img src='/image/image.png' className={style.productImage1} />
                </div>
                <div className={style.product3}>
                    <img src='/image/image.png' className={style.productImage1} />
                    <div className={style.productText}>
                        <h3 className={style.productFont}>Lorem ipsum</h3>
                        <p className={style.productFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className={style.product4}>
                    <div className={style.productText}>
                        <h3 className={style.productFont}>Lorem ipsum</h3>
                        <p className={style.productFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <img src='/image/image.png' className={style.productImage1} />
                </div>
            </div>
        </div>
    )
}