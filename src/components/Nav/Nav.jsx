import styles from './Nav.module.sass'
import CoffeeBeansIcon from '../CoffeeBeansIcon'
import { Link } from 'react-router-dom'

const Nav = ({ color }) => {
	return (
		<div>
			<div className={styles.Nav}>
				<div className={styles.Nav_CoffeeBeans}>
					<CoffeeBeansIcon color={color} />
				</div>
				<nav>
					<ul
						style={{ color: color, '--color': color }}
						className={styles.Nav_List}
					>
						<Link to='/'>
							<li>Coffee house</li>
						</Link>
						<Link to='our-coffee'>
							<li>Our coffee</li>
						</Link>
						<Link to='for-your-pleasure'>
							<li>For your pleasure</li>
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Nav
