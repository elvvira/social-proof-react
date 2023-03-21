import style from './header.module.scss'

const Header = () =>{
return <header>
    <h1  className={style.title}>10,000+ of our users love our products.</h1>
    <p  className={style.subTitle}>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
</header>
}
export default Header