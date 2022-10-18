import CoffeeBeans from '../Coffee Beans/CoffeeBeans'
import Nav from '../Nav/Nav'
import styles from './Footer.module.sass'

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Footer_Nav}>
				<Nav color='black' />
			</div>
			<CoffeeBeans color='black' />
		</footer>
	)
}

export default Footer
