import style from './ratingCard.module.scss'

const CardRating =({category}) =>{
return      <div className={style.container}>
<div className={style.stars}>
    <img className={style.image}src="/public/images/icon-star.svg" alt="" />
    <img  className={style.image} src="/public/images/icon-star.svg" alt="" />
    <img  className={style.image} src="/public/images/icon-star.svg" alt="" />
    <img className={style.image} src="/public/images/icon-star.svg" alt="" />
    <img className={style.image} src="/public/images/icon-star.svg" alt="" />
</div>
<p className={style.title}>Rated 5 Stars in {category}</p>
</div>
}
export default CardRating