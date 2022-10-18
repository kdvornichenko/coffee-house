import styles from './FirstScreen.module.sass'
import { Link } from 'react-router-dom'
import CoffeeBeans from '../Coffee Beans/CoffeeBeans'

const FirstScreen = () => {
	return (
		<div className={styles.FirstScreen}>
			<div className={styles.FirstScreen_Content}>
				<h1 className={styles.FirstScreen_ContentHeading}>
					Everything You Love About Coffee
				</h1>
				<CoffeeBeans color='white' />
				<h2 className={styles.FirstScreen_ContentText}>
					We makes every day full of energy and taste
				</h2>
				<h2 className={styles.FirstScreen_ContentText}>
					Want to try our beans?
				</h2>
			</div>
			<Link className={styles.FirstScreen_Btn} to='/our-coffee'>
				{' '}
				More
			</Link>
		</div>
	)
}

export default FirstScreen
