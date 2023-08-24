import mBuy from './mbuy.png';
import phGrapher from './ph-grapher.png';
import learnVerse from './learn-verse.png';
import sellerProducts from './seller-products.png';
import sellerAddProduct from './seller-add-product.png';
import adminDashboard from './admin-dashboard.png';
import userService from './user-service.png';
import userReview from './user-review.png';
import userProfile from './user-profile.png';
import sameCourse from './same-course.png';
import courseDetails from './course-details.png';
import coursesSection from './courses-section.png';
export const allProjects = [
	{
		id: '1',
		name: 'mBuy',
		title: 'A Used product resell site',
		picture: mBuy,
		liveLink: 'https://m-buy-sell.web.app/',
		frontendCodeLink: 'https://github.com/rssabbir-dev/m-buy-sell-frontend',
		backendCodeLink: 'https://github.com/rssabbir-dev/m-buy-sell-backend',
		technology: [
			'HTML',
			'TAILWIND',
			'DAISYUI',
			'HYPERUI',
			'REACT',
			'FIREBASE',
			'SWIPERJS',
			'REACT-HOOK-FORM',
			'SWEETALERT2',
			'AXIOS',
			'STRIPE',
			'TANSTACK QUERY',
			'NODE',
			'EXPRESS',
			'MONGODB',
			'JWT',
		],
		feature: [
			'Implement password and google authentication by firebase',
			'Implement three role based access (buyer,seller,admin) and verify those role by JWT token in sever side',
			'Implement image upload systems on host image on imgbb',
			'Implement simple payment system by stripe',
			'Book product, payment order, report product (Only Buyer)',
			'Delete reported product, delete buyer and seller, verified seller (Only Admin)',
			'Add Product, add category, delete user seller created product, promote seller created product (Only Seller)',
		],
		showcaseOne: {
			title: 'Seller can see all his products on dashboard',
			picture: sellerProducts,
		},
		showcaseTwo: {
			title: 'Seller can add a new product on our site',
			picture: sellerAddProduct,
		},
		showcaseThree: {
			title: 'Admin dashboard where admin can see all users, all reported products, and made action if needed',
			picture: adminDashboard,
		},
	},
	{
		id: '2',
		name: 'Ph_Grapher',
		title: 'A Photographer services portfolio',
		picture: phGrapher,
		liveLink: 'https://ph-grapher.web.app/',
		frontendCodeLink: 'https://github.com/rssabbir-dev/ph-grapher-frontend',
		backendCodeLink: 'https://github.com/rssabbir-dev/ph-grapher-backend',
		technology: [
			'HTML',
			'TAILWIND',
			'DAISYUI',
			'HYPERUI',
			'REACT',
			'FIREBASE',
			'SWIPERJS',
			'REACT-PHOTO-VIEW',
			'REACT-HELMET',
			'REACT-HOOK-FORM',
			'SWEETALERT2',
			'AXIOS',
			'STRIPE',
			'TANSTACK QUERY',
			'NODE',
			'EXPRESS',
			'MONGODB',
			'JWT',
		],
		feature: [
			'A user friendly user interface.',
			'Organized Services on service section.',
			'User Profile system for update there name and photo.',
			'Shortcut login with Google login system.',
			'Blog section for share new thing.',
			'Have a nice footer section for navigate user where they want to go.',
			'Services details page',
			'User make services or review on our site',
			'User can delete or update their review',
			'User can see other review on service details section, but can not update or delete',
		],
		showcaseOne: {
			title: 'User can see their own review on My Review page, and he/she can update or delete a review',
			picture: userReview,
		},
		showcaseTwo: {
			title: 'User can add a new service, and he/she can see all his previous services on left side',
			picture: userService,
		},
		showcaseThree: {
			title: 'User can update their profile information they want to changed',
			picture: userProfile,
		},
	},
	{
		id: '3',
		name: 'LearnVerse',
		picture: learnVerse,
		liveLink: 'https://learn-verse-36a60.web.app/',
		frontendCodeLink:
			'https://github.com/rssabbir-dev/learn-verse-frontend',
		backendCodeLink: 'https://github.com/rssabbir-dev/learn-verse-backend',
		technology: [
			'HTML',
			'TAILWIND',
			'DAISYUI',
			'REACT',
			'FIREBASE',
			'SWIPERJS',
			'REACT-INNER-IMAGE-ZOOM',
			'REACT-ICONS',
			'THEME-CHANGE',
			'@KUNWARJI/REACT-TO-PDF',
			'NODE',
			'EXPRESS',
			'MONGODB',
		],
		feature: [
			'A user friendly user interface.',
			'User preferred theme detect',
			'Organized Courses by there category.',
			'User Profile system for update there name and photo.',
			'User Profile system for update there name and photo.',
			'Blog section for share new thing and study material with our student.',
			'Have a nice footer section for navigate user where they want to go.',
			'Course details page for give user better knowledge about courses.',
		],
		showcaseOne: {
			title: 'User can see course by their category',
			picture: coursesSection,
		},
		showcaseTwo: {
			title: 'User can see all course details on and buy course',
			picture: courseDetails,
		},
		showcaseThree: {
			title: 'User can see all similar course under course details page',
			picture: sameCourse,
		},
	},
];
