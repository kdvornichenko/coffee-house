import Nav from '../Nav/Nav'
import styles from './Header.module.sass'

const Header = () => {
	return (
		<header className={styles.Header}>
			<Nav color='white' />
		</header>
	)
}

export default Header
