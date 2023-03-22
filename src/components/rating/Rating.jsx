import style from './rating.module.scss'
import { cardRating } from '../../constants/info-cards';
import CardRating from '../card-rating/CardRating';

const Rating = () =>{
    return <div className={style['rating-container']}>
        {cardRating.map(card =>{
            return <CardRating key={card.id} {...card}></CardRating>
        })}
        
      
    </div>
}
export default Rating