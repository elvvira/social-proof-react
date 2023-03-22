import Header from '../header/Header';
import Rating from '../rating/Rating';
import Reviews from '../reviews/Reviews';
import style from './main.module.scss';

const Main = () => {
	return (
		<div className={style.main}>
			<div className={style.container}>
				<Header />
				<Rating />
			</div>
			<Reviews />
		</div>
	);
};
export default Main;
