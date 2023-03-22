import style from './rating.module.scss'

const Rating = () =>{
    return <div className={style['rating-container']}>
        <div className={style.container}>
            <div className={style.stars}>
                <img src="/public/images/icon-star.svg" alt="" />
                <img src="/public/images/icon-star.svg" alt="" />
                <img src="/public/images/icon-star.svg" alt="" />
                <img src="/public/images/icon-star.svg" alt="" />
                <img src="/public/images/icon-star.svg" alt="" />
            </div>
            <p className={style.title}>Rated 5 Stars in Reviews</p>
            </div>
        {/* <div>caja2</div>
        <div>caja3</div> */}
    </div>
}
export default Rating