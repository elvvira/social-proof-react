import { v4 } from 'uuid';

const cardRating = [
	{
		id: v4(),
		category: 'Reviews'
	},
	{
		id: v4(),
		category: 'Report Guru'
	},
	{
		id: v4(),
		category: 'BestTech'
	}
];

const cardReview = [
	{
		id: v4(),
		icon: '/public/images/image-colton.jpg',
		username: 'Colton Smith',
		info: '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”'
	},
	{
		id: v4(),
		icon: '/public/images/image-irene.jpg',
		username: 'Irene Roberts',
		info: '“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. ”'
	},
	{
		id: v4(),
		icon: '/public/images/image-anne.jpg',
		username: 'Anne Wallace',
		info: '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”'
	}
];
export { cardRating, cardReview };
