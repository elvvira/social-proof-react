import style from './reviews.module.scss'

const Reviews = () =>{
    return <div className={style['reviews-container']}>
        <div className={style.container}>
            <div className={style.header}>
               
                <img className={style.image} src="/public/images/image-anne.jpg" alt="" />
               
                <div className={style['header-information']}>
                    <p>Colton Smith</p>
                    <p className={style.subtitle}>Verified Buyer</p>
                </div>
            </div>
            <p className={style.review}>“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”</p>
        </div>


        <div>caja2</div>
        <div>caja3</div>
    </div>
}
export default Reviews