import Header from "../header/Header"
import Rating from "../rating/Rating"
import Reviews from "../reviews/Reviews"
import style from './main.module.scss'
import { cardRating, cardReview } from '../../constants/info-cards';

const Main =()=>{
    return <div className={style.main}>
        <Header/>
       <Rating/>
       <Reviews/>
        
    </div>
}
export default Main