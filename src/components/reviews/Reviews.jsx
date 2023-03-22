import style from './reviews.module.scss'
import { cardReview } from '../../constants/info-cards';
import ReviewsCard from '../reviews-card/ReviewsCard';

const Reviews = () =>{
    return <div className={style['reviews-container']}>
        {cardReview.map(card =>{
            return <ReviewsCard key={card.id} {...card}/>
        })}
    
    </div>
}
export default Reviews