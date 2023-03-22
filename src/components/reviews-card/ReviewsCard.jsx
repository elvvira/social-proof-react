import style from './reviewsCard.module.scss'

const ReviewsCard = ({icon, username, info}) =>{
return  <div className={style.container}>
<div className={style.header}>
   
    <img className={style.image} src={icon} alt="" />
   
    <div className={style['header-information']}>
        <p>{username}</p>
        <p className={style.subtitle}>Verified Buyer</p>
    </div>
</div>
<p className={style.review}>{info}</p>
</div>
}
export default ReviewsCard