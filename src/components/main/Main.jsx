import Header from "../header/Header"
import Rating from "../rating/Rating"
import Reviews from "../reviews/Reviews"
import style from './main.module.scss'

const Main =()=>{
    return <div className={style.main}>
        <Header/>
       <Rating/>
       <Reviews/>
        
    </div>
}
export default Main